export const slides = [
  {
    title: "Introduction",
    body: `
DeepSeek AI, a Chinese startup founded in 2023, has recently disrupted the global AI industry with its groundbreaking innovations. The company has developed advanced AI models that rival or surpass those of established players like OpenAI, but at a fraction of the cost. This presentation will explore DeepSeek's innovations, their impact on the AI industry, and the implications for the future of AI development.
    `,
  },
  {
    title: "Background and Founding",
    body: `
- Founded in July 2023 by Liang Wenfeng, a graduate of Zhejiang University
- Funded by Liang's hedge fund, High-Flyer, with assets estimated at $8 billion
- Started as an artificial general intelligence (AGI) research lab in April 2023, becoming its own company in May 2023
- Liang's foresight: Stockpiled Nvidia A100 chips before US export restrictions, providing a crucial advantage
    `,
  },
  {
    title: "DeepSeek's Innovations: DeepSeek-V3 Model",
    body: `
- 671B parameter model developed for less than $6 million
- Uses significantly less data and cheaper chips compared to competitors
- Activates only 37 billion parameters (5.5%) during actual tasks, ensuring efficiency
    `,
  },
  {
    title: "DeepSeek's Innovations: Architectural Breakthroughs",
    body: `
1. Mixture-of-Experts (MoE) Architecture
   - Divides the model into specialized subnetworks ("experts")
   - Dynamic routing: Selects 8 out of 256 routing experts per layer
   - Balances shared and routed experts for general knowledge and specialization

2. Multi-Head Latent Attention (MLA)
   - Compresses key-value vectors to 1/16th their original size
   - Reduces memory usage and accelerates inference
   - Enables efficient caching for faster token generation

3. Multi-Token Prediction (MTP)
   - Predicts multiple tokens sequentially during training
   - Improves accuracy on long-context tasks
   - Enables parallel token prediction during inference

4. FP8 Mixed Precision Training
   - Uses 8-bit floating-point precision
   - Halves memory consumption compared to FP16
   - Achieves training cost of $5.576 million, 10x cheaper than comparable models
    `,
  },
  {
    title: "Impact on the AI Industry",
    body: `
- Triggered a global tech selloff, risking $1 trillion in market capitalization
- Challenges the assumption that AI development requires massive resources
- Offers significantly lower API pricing, up to 95% less than competitors like OpenAI
- Sparked an AI model price war in China, forcing major tech giants to cut prices
- Dubbed the "Pinduoduo of AI" for its disruptive pricing strategy
    `,
  },
  {
    title: "Open-Source Approach",
    body: `
- Most DeepSeek models are open-source, promoting accessibility and innovation
- Aligns with the broader trend of open-sourcing in AI development
- Enables wider adoption and adaptation of AI technologies
- Focus on pure research without immediate commercialization plans
    `,
  },
  {
    title: "Performance and Capabilities",
    body: `
- Matches or outperforms OpenAI's models on several math and reasoning metrics
- Supports context lengths of up to 128K tokens, ideal for complex tasks
- Excels in code generation, data analysis, and complex problem-solving
- DeepSeek-V2-Lite: 15.7B total parameters, 2.4B activated for each token
    `,
  },
  {
    title: "Implications for the Future",
    body: `
- Potential to democratize AI development and application globally
- May accelerate AI innovation and reshape the competitive landscape
- Challenges US tech supremacy in AI, despite sanctions on advanced semiconductors
- Raises questions about the valuation of AI-focused tech stocks
    `,
  },
  {
    title: "Conclusion",
    body: `
DeepSeek represents a significant shift in AI development, emphasizing efficiency, openness, and innovation. Its success challenges established norms and could lead to more accessible and powerful AI solutions worldwide. As the "Sputnik moment" for AI, DeepSeek's rise signals a new era of global competition and collaboration in artificial intelligence.
    `,
  },
]

