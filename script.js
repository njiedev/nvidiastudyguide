// ─── Data ───
const sections = [
  {
    id:'overview', label:'Overview',
    render: () => `
      <div class="info-grid">
        <div class="info-cell"><div class="label">Exam</div><div class="value">NCA-GENL</div></div>
        <div class="info-cell"><div class="label">Cost</div><div class="value">$135 exam</div></div>
        <div class="info-cell"><div class="label">Format</div><div class="value">50–60 Qs, 60 min</div></div>
        <div class="info-cell"><div class="label">Target</div><div class="value">75%+</div></div>
        <div class="info-cell"><div class="label">Retake</div><div class="value">14-day wait</div></div>
        <div class="info-cell"><div class="label">Valid</div><div class="value">2 years</div></div>
      </div>

      <div class="card">
        <div class="sub-label">Top 12 Tested Concepts</div>
        <div class="concept-grid">
          ${[
            'Transformer architecture','Attention mechanism (Q/K/V)','Encoder vs decoder models',
            'Prompt engineering','LoRA / PEFT fine-tuning','Eval metrics (BLEU, ROUGE, perplexity)',
            'Tokenization (BPE, WordPiece)','Text embeddings & vector search','LangChain (chains, agents)',
            'NVIDIA NIM & Triton','Bias detection & mitigation','Hallucination & RAG'
          ].map((c,i) => `<div class="concept-item"><span class="concept-num">${String(i+1).padStart(2,'0')}</span>${c}</div>`).join('')}
        </div>
      </div>

      <div class="card">
        <div class="sub-label">Common Exam Traps</div>
        ${[
          'Positional encoding is ADDED to embeddings, not concatenated',
          'Self-attention ≠ cross-attention',
          'Transformers use layer normalization (not batch normalization)',
          'GPT = decoder-only · BERT = encoder-only · T5 = encoder-decoder',
          'When stuck between two answers, prefer the NVIDIA-specific tool'
        ].map(t => `<div class="trap-item"><span class="trap-icon">⚠</span><span>${t}</span></div>`).join('')}
      </div>

      <div class="card">
        <div class="sub-label">Cost Summary</div>
        <table class="cost-table">
          <tr><th>Item</th><th>Cost</th><th>Notes</th></tr>
          <tr><td>Getting Started With Deep Learning</td><td>$90</td><td>Scholarship</td></tr>
          <tr><td>Intro to Transformer-Based NLP</td><td>$30</td><td>Scholarship</td></tr>
          <tr><td>Building LLM Apps w/ Prompt Eng.</td><td>$90</td><td>Scholarship</td></tr>
          <tr><td>Rapid App Dev With LLMs</td><td>$90</td><td>Scholarship</td></tr>
          <tr><td style="color:var(--green);font-weight:700">Total out of pocket</td><td style="color:var(--green);font-weight:700">$135</td><td style="color:var(--green)">Just the exam</td></tr>
        </table>
      </div>
    `
  },
  {
    id:'phase1', label:'Phase 1: Deep Learning',
    phase:'PHASE 01', title:'Deep Learning Foundations', meta:'Week 1 · ~12 hours',
    domains:[{label:'Core ML 30%',cls:'core'},{label:'Data Analysis 14%',cls:'data'}],
    items:[
      {id:'p1-alammar',text:'Read The Illustrated Transformer by Jay Alammar',meta:'Blog · ~1 hour · <a href="https://jalammar.github.io/illustrated-transformer/" target="_blank">jalammar.github.io</a>',tag:'free',tagLabel:'FREE'},
      {id:'p1-dli',text:'Complete DLI: Getting Started With Deep Learning',meta:'Self-paced · 8 hours · $90 (scholarship) · <a href="https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-01+V1" target="_blank">learn.nvidia.com</a>',tag:'dli',tagLabel:'DLI'},
      {id:'p1-karpathy1',text:'Watch Karpathy Lecture 1: Backpropagation / Micrograd',meta:'YouTube · ~2.5 hours · <a href="https://www.youtube.com/watch?v=VMj-3S1tku0" target="_blank">youtube.com</a>',tag:'video',tagLabel:'VIDEO',embedUrl:'https://www.youtube.com/embed/VMj-3S1tku0'},
      {id:'p1-karpathy7',text:'Watch Karpathy Lecture 7: Building GPT from Scratch',meta:'YouTube · ~2 hours · <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" target="_blank">youtube.com</a>',tag:'video',tagLabel:'VIDEO',embedUrl:'https://www.youtube.com/embed/kCc8FmEb1nY'},
      {id:'p1-3b1b',text:'Watch 3Blue1Brown: Neural Networks playlist',meta:'YouTube · ~1 hour · <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank">youtube.com</a>',tag:'video',tagLabel:'VIDEO',embedUrl:'https://www.youtube.com/embed/videoseries?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi'},
      {id:'p1-paper',text:'Read "Attention Is All You Need" (sections 1–3)',meta:'Paper · ~1 hour · <a href="https://arxiv.org/abs/1706.03762" target="_blank">arxiv.org</a>',tag:'paper',tagLabel:'PAPER'},
      {id:'p1-annotated',text:'Optional: Read The Annotated Transformer',meta:'Tutorial · ~2 hours · <a href="https://nlp.seas.harvard.edu/2018/04/03/attention.html" target="_blank">nlp.seas.harvard.edu</a>',tag:'paper',tagLabel:'PAPER'},
    ],
    checkpoints:[
      {id:'p1-c1',text:'I can draw the transformer architecture from memory'},
      {id:'p1-c2',text:'I can explain Q/K/V in attention and why we scale by √d_k'},
      {id:'p1-c3',text:'I can explain positional encoding and how it works'},
      {id:'p1-c4',text:'I know the difference between self-attention and cross-attention'},
      {id:'p1-c5',text:'I can explain transfer learning and when to use it'},
    ]
  },
  {
    id:'phase2', label:'Phase 2: Data Science',
    phase:'PHASE 02', title:'Data Science & GPU-Accelerated ML', meta:'Week 2 · ~10 hours',
    domains:[{label:'Data Analysis 14%',cls:'data'},{label:'Core ML 30%',cls:'core'},{label:'Experimentation 22%',cls:'exp'}],
    items:[
      {id:'p2-kaggle-pandas',text:'Complete Kaggle: Pandas micro-course',meta:'Interactive notebooks · ~4 hours · <a href="https://www.kaggle.com/learn/pandas" target="_blank">kaggle.com</a>',tag:'free',tagLabel:'FREE'},
      {id:'p2-kaggle-ml1',text:'Complete Kaggle: Intro to Machine Learning',meta:'Interactive · ~3 hours · <a href="https://www.kaggle.com/learn/intro-to-machine-learning" target="_blank">kaggle.com</a>',tag:'free',tagLabel:'FREE'},
      {id:'p2-kaggle-ml2',text:'Complete Kaggle: Intermediate Machine Learning',meta:'Interactive · ~4 hours · Covers XGBoost, cross-validation · <a href="https://www.kaggle.com/learn/intermediate-machine-learning" target="_blank">kaggle.com</a>',tag:'free',tagLabel:'FREE'},
      {id:'p2-rapids',text:'Read RAPIDS documentation overviews (cuDF, cuML, cuGraph)',meta:'Docs · ~1 hour · <a href="https://rapids.ai" target="_blank">rapids.ai</a>',tag:'read',tagLabel:'READ'},
      {id:'p2-cudf-dev',text:'Read NVIDIA cuDF developer page',meta:'Overview · ~20 min · <a href="https://developer.nvidia.com/topics/ai/data-science/cuda-x-data-science-libraries/cudf" target="_blank">developer.nvidia.com</a>',tag:'read',tagLabel:'READ'},
      {id:'p2-networkx',text:'Skim NetworkX tutorial (concepts: PageRank, BFS)',meta:'Docs · ~30 min · <a href="https://networkx.org/documentation/stable/tutorial.html" target="_blank">networkx.org</a>',tag:'free',tagLabel:'FREE'},
    ],
    checkpoints:[
      {id:'p2-c1',text:'I know cuDF = GPU pandas, cuML = GPU sklearn, cuGraph = GPU NetworkX'},
      {id:'p2-c2',text:'I understand cross-validation, loss functions, explained variance'},
      {id:'p2-c3',text:'I can describe RAPIDS and when you would use it over CPU tools'},
      {id:'p2-c4',text:'I know what XGBoost is and how it differs from neural networks'},
    ]
  },
  {
    id:'phase3', label:'Phase 3: Transformers & NLP',
    phase:'PHASE 03', title:'Transformers & NLP', meta:'Week 3 · ~14 hours',
    domains:[{label:'Core ML 30%',cls:'core'},{label:'Software Dev 24%',cls:'dev'},{label:'Experimentation 22%',cls:'exp'}],
    items:[
      {id:'p3-dli',text:'Complete DLI: Intro to Transformer-Based NLP',meta:'Self-paced · 6 hours · $30 (scholarship) · <a href="https://courses.nvidia.com/courses/course-v1:DLI+S-FX-08+V1/" target="_blank">courses.nvidia.com</a>',tag:'dli',tagLabel:'DLI'},
      {id:'p3-hf',text:'Complete Hugging Face LLM Course (Chapters 1–6)',meta:'Interactive · ~6 hours · <a href="https://huggingface.co/learn/llm-course/en/chapter1/1" target="_blank">huggingface.co</a>',tag:'free',tagLabel:'FREE'},
      {id:'p3-dlai-hf',text:'Complete DeepLearning.AI: Open Source Models with HF',meta:'Short course · ~1.5 hours · <a href="https://www.deeplearning.ai/short-courses/open-source-models-hugging-face/" target="_blank">deeplearning.ai</a>',tag:'free',tagLabel:'FREE'},
    ],
    checkpoints:[
      {id:'p3-c1',text:'I know encoder-only (BERT) vs decoder-only (GPT) vs encoder-decoder (T5)'},
      {id:'p3-c2',text:'I know BPE (GPT), WordPiece (BERT), SentencePiece (T5)'},
      {id:'p3-c3',text:'I can use HuggingFace pipeline() for NLP tasks'},
      {id:'p3-c4',text:'I understand fine-tuning a pretrained model on a downstream task'},
      {id:'p3-c5',text:'I can describe BLEU, ROUGE, perplexity, and F1'},
    ]
  },
  {
    id:'phase4', label:'Phase 4: Prompt Eng & LLM Apps',
    phase:'PHASE 04', title:'Prompt Engineering & LLM Applications', meta:'Week 4 · ~14 hours',
    domains:[{label:'Core ML 30%',cls:'core'},{label:'Experimentation 22%',cls:'exp'},{label:'Software Dev 24%',cls:'dev'}],
    items:[
      {id:'p4-dlai-prompt',text:'Complete DeepLearning.AI: Prompt Engineering for Devs',meta:'Short course · ~1.5 hours · <a href="https://learn.deeplearning.ai/courses/chatgpt-prompt-eng/" target="_blank">deeplearning.ai</a>',tag:'free',tagLabel:'FREE'},
      {id:'p4-dlai-lc1',text:'Complete DeepLearning.AI: LangChain for LLM App Dev',meta:'Short course · ~1.5 hours · <a href="https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/" target="_blank">deeplearning.ai</a>',tag:'free',tagLabel:'FREE'},
      {id:'p4-dlai-lc2',text:'Complete DeepLearning.AI: LangChain Chat with Your Data',meta:'Short course · ~1.5 hours · <a href="https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/" target="_blank">deeplearning.ai</a>',tag:'free',tagLabel:'FREE'},
      {id:'p4-dli',text:'Complete DLI: Building LLM Apps with Prompt Engineering',meta:'Self-paced · 8 hours · $90 (scholarship) · <a href="https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-12+V2" target="_blank">learn.nvidia.com</a>',tag:'dli',tagLabel:'DLI'},
    ],
    checkpoints:[
      {id:'p4-c1',text:'I can describe zero-shot, few-shot, and chain-of-thought prompting'},
      {id:'p4-c2',text:'I understand the full RAG pipeline (load → chunk → embed → retrieve → generate)'},
      {id:'p4-c3',text:'I know LangChain chains vs agents vs memory'},
      {id:'p4-c4',text:'I know when to use RAG vs fine-tuning vs prompt engineering'},
      {id:'p4-c5',text:'I understand temperature, top-p, and generation parameters'},
    ]
  },
  {
    id:'phase5', label:'Phase 5: LLM Dev & Deploy',
    phase:'PHASE 05', title:'LLM Development & Deployment', meta:'Week 5 · ~12 hours',
    domains:[{label:'Software Dev 24%',cls:'dev'},{label:'Core ML 30%',cls:'core'},{label:'Experimentation 22%',cls:'exp'},{label:'Trustworthy AI 10%',cls:'trust'}],
    items:[
      {id:'p5-dli',text:'Complete DLI: Rapid App Dev With LLMs',meta:'Self-paced · 8 hours · $90 (scholarship) · <a href="https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-26+V1" target="_blank">learn.nvidia.com</a>',tag:'dli',tagLabel:'DLI'},
      {id:'p5-coursera',text:'Audit Coursera: Generative AI with LLMs',meta:'~16 hours (skim) · RLHF, LoRA, alignment · <a href="https://www.coursera.org/learn/generative-ai-with-llms" target="_blank">coursera.org</a>',tag:'free',tagLabel:'FREE'},
      {id:'p5-hf-adv',text:'Complete Hugging Face LLM Course (Chapters 7–9)',meta:'Interactive · ~3 hours · Fine-tuning workflows, Gradio · <a href="https://huggingface.co/learn/llm-course" target="_blank">huggingface.co</a>',tag:'free',tagLabel:'FREE'},
    ],
    checkpoints:[
      {id:'p5-c1',text:'I understand LoRA and why it\'s more memory-efficient than full fine-tuning'},
      {id:'p5-c2',text:'I can explain RLHF and model alignment'},
      {id:'p5-c3',text:'I understand model quantization (FP32 → FP16 → INT8)'},
    ]
  },
  {
    id:'phase6', label:'Phase 6: NVIDIA Tools & Ethics',
    phase:'PHASE 06', title:'NVIDIA Tooling & Trustworthy AI', meta:'Week 5–6 · ~6 hours',
    domains:[{label:'Trustworthy AI 10%',cls:'trust'},{label:'Software Dev 24%',cls:'dev'}],
    items:[
      {id:'p6-trust',text:'Read NVIDIA Trustworthy AI page',meta:'Web · ~15 min · <a href="https://www.nvidia.com/en-us/ai-data-science/trustworthy-ai/" target="_blank">nvidia.com</a>',tag:'read',tagLabel:'READ'},
      {id:'p6-trust-blog',text:'Read "What Is Trustworthy AI?" NVIDIA Blog',meta:'Blog · ~10 min',tag:'read',tagLabel:'READ'},
      {id:'p6-rag-blog',text:'Read "What Is RAG?" NVIDIA Blog',meta:'Blog · ~15 min · <a href="https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/" target="_blank">blogs.nvidia.com</a>',tag:'read',tagLabel:'READ'},
      {id:'p6-llm-blog',text:'Read "Getting Started With LLMs for Enterprise" blog',meta:'Blog · ~20 min · <a href="https://developer.nvidia.com/blog/getting-started-with-large-language-models-for-enterprise-solutions/" target="_blank">developer.nvidia.com</a>',tag:'read',tagLabel:'READ'},
      {id:'p6-vid1',text:'Watch "The Fast Path to Developing With LLMs"',meta:'On-demand · ~50 min · <a href="https://www.nvidia.com/en-us/on-demand/session/llmdevday23-01/" target="_blank">nvidia.com</a>',tag:'video',tagLabel:'VIDEO'},
      {id:'p6-vid2',text:'Watch "Running Your Own LLM"',meta:'On-demand · ~40 min · <a href="https://www.nvidia.com/en-us/on-demand/session/llmdevday23-04/" target="_blank">nvidia.com</a>',tag:'video',tagLabel:'VIDEO'},
      {id:'p6-coursera',text:'Skim NCA-GENL Coursera Specialization (NIM, Triton, NeMo)',meta:'Audit free · Focus on NVIDIA tooling modules · <a href="https://www.coursera.org/specializations/exam-prep-nca-genl-nvidia-certified-generative-ai-llms-associate" target="_blank">coursera.org</a>',tag:'free',tagLabel:'FREE'},
      {id:'p6-lora',text:'Read LoRA paper (abstract + sections 1–3)',meta:'Paper · ~30 min · <a href="https://arxiv.org/abs/2106.09685" target="_blank">arxiv.org</a>',tag:'paper',tagLabel:'PAPER'},
      {id:'p6-bert',text:'Read BERT paper (abstract + intro)',meta:'Paper · ~20 min · <a href="https://arxiv.org/abs/1810.04805" target="_blank">arxiv.org</a>',tag:'paper',tagLabel:'PAPER'},
    ],
    checkpoints:[
      {id:'p6-c1',text:'I know what NIM, Triton, TensorRT-LLM, NeMo, and NeMo Guardrails do'},
      {id:'p6-c2',text:'I can describe AI ethics principles: fairness, transparency, accountability, privacy'},
      {id:'p6-c3',text:'I understand bias sources, hallucination causes, and how RAG helps'},
    ]
  },
  {
    id:'cheatsheet', label:'Cheat Sheet',
    render: () => `
      <div class="card">
        <div class="sub-label">Core ML & AI Knowledge — 30%</div>
        <div class="cheat-category">Neural Networks</div>
        <div class="cheat-item">Backprop computes gradients via chain rule; gradient descent updates weights</div>
        <div class="cheat-item">Activations: ReLU (hidden), softmax (classification), tanh, sigmoid</div>
        <div class="cheat-item">Overfitting = memorized; underfitting = too simple</div>
        <div class="cheat-item">Regularization: dropout, weight decay, early stopping, data augmentation</div>
        <div class="cheat-category">Transformers</div>
        <div class="cheat-item">"Attention Is All You Need" (2017) — self-attention replaces recurrence</div>
        <div class="cheat-item">Attention(Q,K,V) = softmax(QK<sup>T</sup> / √d<sub>k</sub>) × V</div>
        <div class="cheat-item">Multi-head attention: parallel attention ops, different relationship types</div>
        <div class="cheat-item">Positional encoding: sine/cosine ADDED to embeddings (not concatenated!)</div>
        <div class="cheat-item">Layer norm (not batch norm)</div>
        <div class="cheat-item">Encoder-only (BERT) → classification, NER, embeddings</div>
        <div class="cheat-item">Decoder-only (GPT) → text generation</div>
        <div class="cheat-item">Encoder-decoder (T5, BART) → translation, summarization</div>
        <div class="cheat-category">LLM Concepts</div>
        <div class="cheat-item">Tokenization: BPE (GPT), WordPiece (BERT), SentencePiece (T5)</div>
        <div class="cheat-item">LoRA: small trainable matrices on frozen weights — memory-efficient fine-tuning</div>
        <div class="cheat-item">RLHF: human preferences align model outputs</div>
        <div class="cheat-item">Libraries: PyTorch, spaCy (NLP), NumPy, Keras, HF Transformers</div>
      </div>

      <div class="card">
        <div class="sub-label">Software Development — 24%</div>
        <div class="cheat-category">LLM Applications</div>
        <div class="cheat-item">RAG pipeline: load → chunk → embed → vector DB → retrieve → generate</div>
        <div class="cheat-item">Summarizers: extractive (select) vs abstractive (generate)</div>
        <div class="cheat-item">Vector DBs: FAISS, Chroma, Pinecone</div>
        <div class="cheat-category">LangChain</div>
        <div class="cheat-item">Chains = sequenced LLM calls; Agents = LLMs choosing tools</div>
        <div class="cheat-item">LangGraph = orchestration for complex pipelines</div>
        <div class="cheat-category">NVIDIA Deployment Stack</div>
        <table class="tools-table">
          <tr><th>Tool</th><th>Purpose</th><th>When to Use</th></tr>
          <tr><td>NIM</td><td>Containerized deployment</td><td>Fast model production</td></tr>
          <tr><td>Triton</td><td>Inference serving</td><td>Multi-model serving</td></tr>
          <tr><td>TensorRT-LLM</td><td>LLM optimization</td><td>Max GPU throughput</td></tr>
          <tr><td>NeMo</td><td>Model building</td><td>Train/fine-tune/deploy</td></tr>
          <tr><td>NeMo Guardrails</td><td>Safety rails</td><td>Chatbot behavior control</td></tr>
          <tr><td>RAPIDS</td><td>GPU data science</td><td>Large dataset processing</td></tr>
          <tr><td>ONNX</td><td>Model format</td><td>Cross-framework compat</td></tr>
          <tr><td>NCCL</td><td>Multi-GPU comms</td><td>Distributed training</td></tr>
        </table>
        <div class="cheat-item">Quantization: FP32 → FP16 → INT8 (faster, less memory, minimal accuracy loss)</div>
      </div>

      <div class="card">
        <div class="sub-label">Experimentation — 22%</div>
        <div class="cheat-category">Evaluation Metrics</div>
        <div class="cheat-item">Cross-entropy (classification), MSE (regression), perplexity (language models)</div>
        <div class="cheat-item">BLEU = translation quality; ROUGE = summarization quality</div>
        <div class="cheat-item">Cross-validation: k-fold splits for robust evaluation</div>
        <div class="cheat-category">Prompting Decision Tree</div>
        <div class="cheat-item">Zero-shot → simple task, capable model</div>
        <div class="cheat-item">Few-shot → task needs examples, 2–5 fit in context</div>
        <div class="cheat-item">Chain-of-thought → reasoning required</div>
        <div class="cheat-item">Fine-tuning → many examples, consistent behavior needed</div>
        <div class="cheat-category">Benchmarks</div>
        <div class="cheat-item">GLUE, SuperGLUE, MMLU for language understanding</div>
        <div class="cheat-item">Evaluating RAG: retrieval relevance, faithfulness, answer correctness</div>
      </div>

      <div class="card">
        <div class="sub-label">Data Analysis — 14%</div>
        <div class="cheat-category">NLP Preprocessing</div>
        <div class="cheat-item">Stemming (rule-based, fast) vs Lemmatization (dictionary-based, accurate)</div>
        <div class="cheat-item">TF-IDF: term frequency × inverse document frequency</div>
        <div class="cheat-category">NVIDIA RAPIDS</div>
        <div class="cheat-item">cuDF = GPU pandas; cuML = GPU sklearn; cuGraph = GPU NetworkX</div>
        <div class="cheat-item">Dask cuDF = multi-GPU distributed processing</div>
        <div class="cheat-item">Apache Arrow = in-memory columnar format for efficient data transfer</div>
        <div class="cheat-item">RAPIDS also accelerates: Polars, Spark, XGBoost, Dask</div>
      </div>

      <div class="card">
        <div class="sub-label">Trustworthy AI — 10%</div>
        <div class="cheat-category">Principles</div>
        <div class="cheat-item">Fairness · Transparency · Accountability · Privacy · Safety</div>
        <div class="cheat-category">Bias & Hallucination</div>
        <div class="cheat-item">Data bias → biased outputs; mitigate with diverse data, audits, fairness metrics</div>
        <div class="cheat-item">Hallucination: confident but wrong; RAG grounds responses in real docs</div>
        <div class="cheat-category">NVIDIA Tools</div>
        <div class="cheat-item">NeMo Guardrails: programmable rules for LLM behavior</div>
        <div class="cheat-item">Alignment: RLHF, Constitutional AI, DPO</div>
        <div class="cheat-item">Red-teaming: adversarial testing for vulnerabilities</div>
      </div>
    `
  },
  {
    id:'examday', label:'Exam Day',
    render: () => `
      <div class="card">
        <div class="sub-label">The Day Before</div>
        <div class="cheat-item">Light review only — skim the cheat sheet tab</div>
        <div class="cheat-item">Focus on NVIDIA tools table and the 12 key concepts</div>
        <div class="cheat-item">Prepare: clear desk, test webcam, government ID ready</div>
        <div class="cheat-item">No new material. Sleep 7–8 hours.</div>
      </div>

      <div class="card">
        <div class="sub-label">During the Exam</div>
        <div class="cheat-item">~1.2 min per question — don't get stuck</div>
        <div class="cheat-item">Flag hard questions, come back later</div>
        <div class="cheat-item">Watch for: "BEST", "FIRST", "MOST likely", "select ALL"</div>
        <div class="cheat-item">When stuck → lean toward the NVIDIA-specific answer</div>
        <div class="cheat-item">Review all flagged questions before submitting</div>
      </div>

      <div class="card">
        <div class="sub-label">Readiness Checklist</div>
        ${[
          {id:'rc-1',text:'I can draw the transformer architecture from memory'},
          {id:'rc-2',text:'I understand attention (Q/K/V, scaling, multi-head)'},
          {id:'rc-3',text:'I know encoder-only vs decoder-only vs encoder-decoder'},
          {id:'rc-4',text:'I can describe zero-shot, few-shot, chain-of-thought'},
          {id:'rc-5',text:'I understand LoRA and parameter-efficient fine-tuning'},
          {id:'rc-6',text:'I know BPE, WordPiece, SentencePiece and which models use which'},
          {id:'rc-7',text:'I can explain LangChain (chains, agents, memory)'},
          {id:'rc-8',text:'I know NIM, Triton, TensorRT-LLM, NeMo, Guardrails'},
          {id:'rc-9',text:'I can describe BLEU, ROUGE, and perplexity'},
          {id:'rc-10',text:'I understand bias, hallucination, and how RAG helps'},
        ].map(item => renderCheckpointItem(item)).join('')}
        <div style="margin-top:16px;padding:12px;background:var(--green-dim);border-radius:8px;font-size:13px;color:var(--green)">
          8+ checked = book the exam. Fewer = study the gaps first.
        </div>
      </div>

      <div class="card" style="text-align:center;padding:24px">
        <div style="font-size:13px;color:var(--text-dim);margin-bottom:12px">Ready?</div>
        <a href="https://www.certiverse.com/#/checkout/nvidia/store-exam/NCA-GENL" target="_blank"
          style="display:inline-block;background:var(--green);color:#000;padding:10px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px">
          Register for Exam — $135
        </a>
      </div>
    `
  }
];

// ─── State ───
const STORAGE_KEY = 'ncagenl-checked';
const ACTIVE_SECTION_KEY = 'ncagenl-active-section';
const NOTES_KEY = 'ncagenl-notes';
const QUIZ_KEY = 'ncagenl-quiz-answers';
let checked = {};
let notes = {};
let quizAnswers = {};
let activeSection = 'overview';
let activeResourceId = null;

try { checked = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch(e) {}
try { notes = JSON.parse(localStorage.getItem(NOTES_KEY) || '{}') } catch(e) {}
try { quizAnswers = JSON.parse(localStorage.getItem(QUIZ_KEY) || '{}') } catch(e) {}
try {
  const savedSection = localStorage.getItem(ACTIVE_SECTION_KEY);
  if (sections.some(section => section.id === savedSection)) activeSection = savedSection;
} catch(e) {}
try {
  const resourceId = window.location.hash.replace('#resource-', '');
  if (resourceId && findResource(resourceId)) activeResourceId = resourceId;
} catch(e) {}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(checked)) } catch(e) {}
}

function saveActiveSection() {
  try { localStorage.setItem(ACTIVE_SECTION_KEY, activeSection) } catch(e) {}
}

function saveNotes() {
  try { localStorage.setItem(NOTES_KEY, JSON.stringify(notes)) } catch(e) {}
}

function saveQuizAnswers() {
  try { localStorage.setItem(QUIZ_KEY, JSON.stringify(quizAnswers)) } catch(e) {}
}

function escapeAttr(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function escapeHtml(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function hasNotes(id) {
  return !!(notes[id] && notes[id].trim());
}

function stripHtml(value) {
  const div = document.createElement('div');
  div.innerHTML = value || '';
  return div.textContent || div.innerText || '';
}

function findResource(id) {
  for (const section of sections) {
    if (!section.items) continue;
    const item = section.items.find(resource => resource.id === id);
    if (item) return { item, section };
  }
  return null;
}

function getResourceUrl(item) {
  const match = (item.meta || '').match(/href="([^"]+)"/);
  return match ? match[1] : '';
}

function getAllCheckIds() {
  const ids = [];
  sections.forEach(s => {
    if (s.items) s.items.forEach(i => ids.push(i.id));
    if (s.checkpoints) s.checkpoints.forEach(c => ids.push(c.id));
  });
  // readiness checklist
  for (let i = 1; i <= 10; i++) ids.push('rc-' + i);
  return ids;
}

function updateProgress() {
  const allIds = getAllCheckIds();
  const total = allIds.length;
  const done = allIds.filter(id => checked[id]).length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const circ = document.getElementById('progressCircle');
  if (circ) circ.style.strokeDashoffset = 97.4 - (97.4 * pct / 100);
  const pctEl = document.getElementById('progressPct');
  if (pctEl) pctEl.textContent = pct + '%';
  const labelEl = document.getElementById('progressLabel');
  if (labelEl) labelEl.textContent = done + ' / ' + total;

  // Section progress bars
  sections.forEach(s => {
    if (!s.items && !s.checkpoints) return;
    const sIds = [];
    if (s.items) s.items.forEach(i => sIds.push(i.id));
    if (s.checkpoints) s.checkpoints.forEach(c => sIds.push(c.id));
    if (s.id === 'examday') for (let i=1;i<=10;i++) sIds.push('rc-'+i);
    const sTotal = sIds.length;
    const sDone = sIds.filter(id => checked[id]).length;
    const sPct = sTotal ? Math.round(sDone / sTotal * 100) : 0;
    const bar = document.getElementById('sp-fill-' + s.id);
    if (bar) bar.style.width = sPct + '%';
    const txt = document.getElementById('sp-text-' + s.id);
    if (txt) txt.textContent = sDone + '/' + sTotal;
  });
}

function toggleCheck(id) {
  checked[id] = !checked[id];
  save();
  const el = document.querySelector(`[data-id="${id}"]`);
  if (el) el.classList.toggle('completed', !!checked[id]);
  updateProgress();
}

function saveResourceNote(id, value) {
  notes[id] = value;
  if (!notes[id].trim()) delete notes[id];
  saveNotes();
}

function getMiniQuiz(item, section) {
  const title = item.text.toLowerCase();
  if (title.includes('transformer') || title.includes('attention')) {
    return [
      {q:'What does self-attention let a transformer do?',options:['Compare each token with other tokens in the same sequence','Store hidden state one token at a time','Replace tokenization with character lookup'],answer:0,why:'Self-attention scores relationships across tokens in the input sequence.'},
      {q:'In scaled dot-product attention, why is the QK score divided by the square root of d_k?',options:['To keep logits from becoming too large','To remove positional encoding','To make the model decoder-only'],answer:0,why:'Scaling stabilizes the softmax when key/query dimensions are large.'},
      {q:'How is positional encoding combined with token embeddings in the original transformer?',options:['It is added to the embeddings','It replaces the embeddings','It is concatenated after attention'],answer:0,why:'A classic exam trap: positional encoding is added, not concatenated.'}
    ];
  }
  if (title.includes('backprop') || title.includes('micrograd') || title.includes('neural networks')) {
    return [
      {q:'What does backpropagation compute?',options:['Gradients of the loss with respect to parameters','The final class label directly','The train/test split'],answer:0,why:'Backprop uses the chain rule to compute gradients for learning.'},
      {q:'What does gradient descent do after gradients are computed?',options:['Updates weights in a direction that reduces loss','Deletes low-value neurons','Converts FP32 weights to INT8'],answer:0,why:'Gradients guide the parameter update step.'},
      {q:'Which activation is commonly used in hidden layers?',options:['ReLU','BLEU','ROUGE'],answer:0,why:'ReLU is a common hidden-layer activation; BLEU and ROUGE are metrics.'}
    ];
  }
  if (title.includes('pandas') || title.includes('machine learning') || title.includes('xgboost')) {
    return [
      {q:'Why use cross-validation?',options:['To estimate model performance across multiple data splits','To make every model a neural network','To embed text into vectors'],answer:0,why:'Cross-validation gives a more robust estimate than one split.'},
      {q:'What kind of task is mean squared error most associated with?',options:['Regression','Text generation','Named entity recognition'],answer:0,why:'MSE is a common regression loss/metric.'},
      {q:'What is XGBoost?',options:['A gradient-boosted tree method','A tokenizer used by BERT','A transformer decoder block'],answer:0,why:'XGBoost is tree-based and often strong on tabular data.'}
    ];
  }
  if (title.includes('rapids') || title.includes('cudf') || title.includes('networkx')) {
    return [
      {q:'What is cuDF closest to?',options:['GPU-accelerated pandas','A vector database','A model alignment method'],answer:0,why:'cuDF brings a pandas-like dataframe API to GPUs.'},
      {q:'What is cuML closest to?',options:['GPU-accelerated scikit-learn','A prompt template format','A tokenizer vocabulary'],answer:0,why:'cuML maps common ML algorithms to GPU workflows.'},
      {q:'When is RAPIDS most useful?',options:['Large data workflows that benefit from GPU acceleration','Tiny static websites','Manual note taking only'],answer:0,why:'RAPIDS is about faster GPU data science and analytics.'}
    ];
  }
  if (title.includes('hugging face') || title.includes('transformer-based nlp')) {
    return [
      {q:'Which model family is encoder-only?',options:['BERT','GPT','T5'],answer:0,why:'BERT is encoder-only and is common for classification, NER, and embeddings.'},
      {q:'Which model family is decoder-only?',options:['GPT','BERT','RAPIDS'],answer:0,why:'GPT-style models are decoder-only and used for generation.'},
      {q:'What does pipeline() help with in Hugging Face Transformers?',options:['Quickly running common NLP tasks','Serving multi-model inference only','Creating CUDA kernels'],answer:0,why:'pipeline() is a high-level API for common model tasks.'}
    ];
  }
  if (title.includes('prompt') || title.includes('langchain') || title.includes('rag')) {
    return [
      {q:'What is the core idea of RAG?',options:['Retrieve relevant context before generating an answer','Train every model from scratch','Remove embeddings from the app'],answer:0,why:'RAG grounds generation in retrieved documents.'},
      {q:'When is few-shot prompting useful?',options:['When examples clarify the desired behavior','When you have no context window','When you need GPU dataframe acceleration'],answer:0,why:'Few-shot prompts use examples to steer the model.'},
      {q:'In LangChain, what is an agent?',options:['An LLM-driven loop that can choose tools','A fixed SQL table','A tokenizer normalization step'],answer:0,why:'Agents select actions/tools based on the task.'}
    ];
  }
  if (title.includes('lora') || title.includes('rlhf') || title.includes('fine-tuning') || title.includes('llms')) {
    return [
      {q:'Why is LoRA parameter-efficient?',options:['It trains small adapter matrices while keeping base weights frozen','It removes all attention heads','It replaces tokenization'],answer:0,why:'LoRA avoids updating the full model.'},
      {q:'What is RLHF used for?',options:['Aligning model behavior with human preferences','Accelerating pandas on GPUs','Measuring summarization overlap'],answer:0,why:'RLHF uses human preference feedback for alignment.'},
      {q:'What is a practical benefit of quantization?',options:['Lower memory use and faster inference','Perfect accuracy on every benchmark','Automatic data cleaning'],answer:0,why:'Lower precision can improve serving efficiency.'}
    ];
  }
  if (title.includes('nvidia') || title.includes('nim') || title.includes('triton') || title.includes('trustworthy') || title.includes('guardrails')) {
    return [
      {q:'What does NVIDIA NIM provide?',options:['Containerized model deployment/inference microservices','A handwritten math proof engine','A CPU-only spreadsheet app'],answer:0,why:'NIM packages optimized inference into deployable services.'},
      {q:'What is NeMo Guardrails for?',options:['Constraining and guiding chatbot behavior','Replacing all evaluation metrics','Training gradient-boosted trees'],answer:0,why:'Guardrails define safety and behavior rules around LLM apps.'},
      {q:'Which is a trustworthy AI concern?',options:['Fairness and transparency','Negative letter spacing','CSS border radius'],answer:0,why:'Fairness, transparency, accountability, privacy, and safety are core themes.'}
    ];
  }
  if (title.includes('bert')) {
    return [
      {q:'What type of transformer is BERT?',options:['Encoder-only','Decoder-only','GPU dataframe library'],answer:0,why:'BERT is an encoder-only transformer.'},
      {q:'What tokenizer is associated with BERT?',options:['WordPiece','BPE only','SentencePiece only'],answer:0,why:'BERT is commonly associated with WordPiece tokenization.'},
      {q:'What is BERT often used for?',options:['Classification, NER, and embeddings','Autoregressive text generation only','Serving NIM containers'],answer:0,why:'Encoder models are strong for understanding tasks.'}
    ];
  }
  return [
    {q:`What is the main study goal for ${item.text}?`,options:['Connect the resource to exam concepts and practice explaining it','Memorize only the URL','Skip the topic if it feels familiar'],answer:0,why:'The tracker is meant to convert each resource into exam-ready understanding.'},
    {q:'What should your notes capture?',options:['Key terms, examples, mistakes, and exam traps','Only the course price','Only whether the page loaded'],answer:0,why:'Useful notes preserve the ideas you will need later.'},
    {q:`Which phase does this resource support?`,options:[section.title,'Exam checkout only','Browser styling'],answer:0,why:`This resource belongs to ${section.title}.`}
  ];
}

function saveQuizAnswer(resourceId, questionIndex, optionIndex) {
  if (!quizAnswers[resourceId]) quizAnswers[resourceId] = {};
  quizAnswers[resourceId][questionIndex] = optionIndex;
  saveQuizAnswers();
  renderContent();
}

function renderQuiz(item, section) {
  const quiz = getMiniQuiz(item, section);
  const answers = quizAnswers[item.id] || {};
  const answered = quiz.filter((_, index) => answers[index] !== undefined);
  const correct = quiz.filter((question, index) => answers[index] === question.answer).length;
  return `
    <div class="card">
      <div class="sub-label">Mini Quiz</div>
      <div class="quiz-score">${correct}/${quiz.length} correct · ${answered.length}/${quiz.length} answered</div>
      ${quiz.map((question, questionIndex) => {
        const selected = answers[questionIndex];
        return `
          <div class="quiz-question">
            <div class="quiz-prompt">${questionIndex + 1}. ${question.q}</div>
            <div class="quiz-options">
              ${question.options.map((option, optionIndex) => {
                const isSelected = selected === optionIndex;
                const showResult = selected !== undefined;
                const isCorrect = question.answer === optionIndex;
                const state = showResult && isSelected ? (isCorrect ? 'correct' : 'wrong') : '';
                const reveal = showResult && isCorrect ? 'correct' : '';
                return `<button class="quiz-option ${state || reveal}" onclick="saveQuizAnswer('${item.id}', ${questionIndex}, ${optionIndex})">${option}</button>`;
              }).join('')}
            </div>
            ${selected !== undefined ? `<div class="quiz-feedback">${question.why}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderResourceDetail(resourceId) {
  const result = findResource(resourceId);
  if (!result) {
    activeResourceId = null;
    return '';
  }
  const { item, section } = result;
  const done = checked[item.id] ? 'completed' : '';
  const tagHtml = item.tag ? `<span class="check-tag tag-${item.tag}">${item.tagLabel}</span>` : '';
  const resourceUrl = getResourceUrl(item);
  return `
    <div class="resource-detail">
      <button class="back-btn" onclick="switchSection('${section.id}')">← Back to ${section.label}</button>
      <div class="phase-header resource-hero">
        <div class="phase-label">${section.phase || 'RESOURCE'}</div>
        <div class="phase-title">${item.text}</div>
        <div class="phase-meta">${stripHtml(item.meta)}</div>
        <div class="resource-actions">
          <button class="detail-check ${done}" onclick="toggleCheck('${item.id}');renderContent()">
            <span class="check-box">
              <svg viewBox="0 0 12 12" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round">
                <path d="M2.5 6.5L5 9L9.5 3.5"/>
              </svg>
            </span>
            ${checked[item.id] ? 'Completed' : 'Mark complete'}
          </button>
          ${tagHtml}
        </div>
      </div>

      <div class="card">
        <div class="sub-label">${item.embedUrl ? 'Lecture' : 'Resource'}</div>
        ${item.embedUrl ? `
          <div class="video-frame detail-video">
            <iframe src="${item.embedUrl}" title="${escapeAttr(item.text)}" loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        ` : `
          <div class="resource-link-card">
            <div>
              <div class="resource-link-title">${item.text}</div>
              <div class="resource-link-meta">${stripHtml(item.meta)}</div>
            </div>
            ${resourceUrl ? `<a href="${resourceUrl}" target="_blank" onclick="event.stopPropagation()">Open resource</a>` : ''}
          </div>
        `}
      </div>

      <div class="card">
        <div class="sub-label">Notes</div>
        <textarea class="notes-box detail-notes" id="notes-${item.id}" placeholder="Capture key ideas, formulas, timestamps, and exam traps..."
          oninput="saveResourceNote('${item.id}', this.value)">${escapeHtml(notes[item.id])}</textarea>
      </div>

      ${renderQuiz(item, section)}
    </div>
  `;
}

function renderCheckItem(item) {
  const done = checked[item.id] ? 'completed' : '';
  const tagHtml = item.tag ? `<span class="check-tag tag-${item.tag}">${item.tagLabel}</span>` : '';
  const notesMarker = hasNotes(item.id) ? '<span class="notes-marker">NOTES</span>' : '';
  return `
    <div class="resource-item">
      <div class="check-item resource-row ${done}" data-id="${item.id}" onclick="openResource('${item.id}')">
        <button class="check-box check-button" onclick="event.stopPropagation();toggleCheck('${item.id}')" aria-label="Toggle ${escapeAttr(item.text)}">
          <svg viewBox="0 0 12 12" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round">
            <path d="M2.5 6.5L5 9L9.5 3.5"/>
          </svg>
        </button>
        <div class="check-content">
          <div class="check-text">${item.text}</div>
          ${item.meta ? `<div class="check-meta">${stripHtml(item.meta)}</div>` : ''}
        </div>
        ${notesMarker}
        ${tagHtml}
      </div>
    </div>
  `;
}

function renderCheckpointItem(item) {
  const done = checked[item.id] ? 'completed' : '';
  return `
    <div class="check-item ${done}" data-id="${item.id}" onclick="toggleCheck('${item.id}')">
      <div class="check-box">
        <svg viewBox="0 0 12 12" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round">
          <path d="M2.5 6.5L5 9L9.5 3.5"/>
        </svg>
      </div>
      <div class="check-content">
        <div class="check-text">${item.text}</div>
      </div>
    </div>
  `;
}

function renderPhaseSection(s) {
  let html = '';
  if (s.phase) {
    html += `<div class="phase-header">
      <div class="phase-label">${s.phase}</div>
      <div class="phase-title">${s.title}</div>
      <div class="phase-meta">${s.meta}</div>
      <div class="phase-domains">${s.domains.map(d => `<span class="domain-tag ${d.cls}">${d.label}</span>`).join('')}</div>
    </div>`;
  }

  // Section progress
  html += `<div class="section-progress">
    <div class="section-progress-bar"><div class="section-progress-fill" id="sp-fill-${s.id}" style="width:0%"></div></div>
    <span class="section-progress-text" id="sp-text-${s.id}">0/0</span>
  </div>`;

  if (s.items) {
    html += `<div class="card"><div class="sub-label">Study Materials</div>`;
    s.items.forEach(item => html += renderCheckItem(item));
    html += `</div>`;
  }
  if (s.checkpoints) {
    html += `<div class="card"><div class="sub-label">✓ Self-Test Checkpoint</div>`;
    s.checkpoints.forEach(cp => html += renderCheckpointItem(cp));
    html += `</div>`;
  }
  return html;
}

// ─── Render ───
function renderNav() {
  const nav = document.getElementById('nav');
  nav.innerHTML = sections.map(s =>
    `<button class="nav-btn ${s.id === activeSection ? 'active' : ''}" onclick="switchSection('${s.id}')">${s.label}</button>`
  ).join('');
}

function renderContent() {
  const container = document.getElementById('content');
  if (activeResourceId) {
    container.innerHTML = renderResourceDetail(activeResourceId);
    updateProgress();
    return;
  }
  container.innerHTML = sections.map(s => {
    const content = s.render ? s.render() : renderPhaseSection(s);
    return `<div class="section ${s.id === activeSection ? 'active' : ''}" id="section-${s.id}">${content}</div>`;
  }).join('');
  updateProgress();
}

function openResource(id) {
  const result = findResource(id);
  if (!result) return;
  activeResourceId = id;
  activeSection = result.section.id;
  saveActiveSection();
  window.location.hash = 'resource-' + id;
  renderNav();
  renderContent();
  window.scrollTo({top:0,behavior:'smooth'});
}

function switchSection(id) {
  activeResourceId = null;
  if (window.location.hash) history.pushState('', document.title, window.location.pathname + window.location.search);
  activeSection = id;
  saveActiveSection();
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navButton = document.querySelector(`.nav-btn[onclick="switchSection('${id}')"]`);
  if (navButton) navButton.classList.add('active');
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const section = document.getElementById('section-' + id);
  if (section) section.classList.add('active');
  renderContent();
  updateProgress();
}

function resetAll() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  checked = {};
  notes = {};
  quizAnswers = {};
  try { localStorage.removeItem(STORAGE_KEY) } catch(e) {}
  try { localStorage.removeItem(NOTES_KEY) } catch(e) {}
  try { localStorage.removeItem(QUIZ_KEY) } catch(e) {}
  renderContent();
  document.querySelectorAll('.check-item').forEach(el => el.classList.remove('completed'));
  updateProgress();
}

window.addEventListener('hashchange', () => {
  const resourceId = window.location.hash.replace('#resource-', '');
  activeResourceId = resourceId && findResource(resourceId) ? resourceId : null;
  renderNav();
  renderContent();
});

renderNav();
renderContent();
