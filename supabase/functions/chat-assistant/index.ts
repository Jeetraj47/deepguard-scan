import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('LOVABLE_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { 
            role: 'system', 
            content: `You are Deep Guard AI's assistant. You are an expert in deepfake detection technology. 
            
Your knowledge includes:
- Deepfakes are synthetic media created using AI/ML techniques like GANs, CNNs, RNNs
- Face-swap deepfakes replace one person's face with another
- Detection methods include: CNNs for facial inconsistencies, RNNs/LSTMs for temporal analysis, frequency analysis, audio-visual consistency checks, biometric verification
- Deep Guard AI uses multiple detection methods to provide detailed analysis reports
- The platform analyzes videos frame-by-frame looking for artifacts, inconsistencies, and unnatural patterns

Provide helpful, accurate information about deepfake detection. Be professional and informative.` 
          },
          ...messages
        ],
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('AI Gateway error:', data);
      throw new Error(data.error?.message || 'Failed to get AI response');
    }

    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ message: assistantMessage }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in chat-assistant function:', error);
    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
