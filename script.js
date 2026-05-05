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
      {id:'p1-karpathy1',text:'Watch Karpathy Lecture 1: Backpropagation / Micrograd',meta:'YouTube · ~2.5 hours · <a href="https://karpathy.ai/zero-to-hero.html" target="_blank">karpathy.ai</a>',tag:'video',tagLabel:'VIDEO'},
      {id:'p1-karpathy7',text:'Watch Karpathy Lecture 7: Building GPT from Scratch',meta:'YouTube · ~2 hours · <a href="https://karpathy.ai/zero-to-hero.html" target="_blank">karpathy.ai</a>',tag:'video',tagLabel:'VIDEO'},
      {id:'p1-3b1b',text:'Watch 3Blue1Brown: Neural Networks playlist',meta:'YouTube · ~1 hour · <a href="https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi" target="_blank">youtube.com</a>',tag:'video',tagLabel:'VIDEO'},
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
        ].map(item => renderCheckItem(item)).join('')}
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
let checked = {};
let activeSection = 'overview';

try { checked = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch(e) {}
try {
  const savedSection = localStorage.getItem(ACTIVE_SECTION_KEY);
  if (sections.some(section => section.id === savedSection)) activeSection = savedSection;
} catch(e) {}

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(checked)) } catch(e) {}
}

function saveActiveSection() {
  try { localStorage.setItem(ACTIVE_SECTION_KEY, activeSection) } catch(e) {}
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

function renderCheckItem(item) {
  const done = checked[item.id] ? 'completed' : '';
  const tagHtml = item.tag ? `<span class="check-tag tag-${item.tag}">${item.tagLabel}</span>` : '';
  return `
    <div class="check-item ${done}" data-id="${item.id}" onclick="toggleCheck('${item.id}')">
      <div class="check-box">
        <svg viewBox="0 0 12 12" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round">
          <path d="M2.5 6.5L5 9L9.5 3.5"/>
        </svg>
      </div>
      <div class="check-content">
        <div class="check-text">${item.text}</div>
        ${item.meta ? `<div class="check-meta">${item.meta}</div>` : ''}
      </div>
      ${tagHtml}
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
    s.checkpoints.forEach(cp => html += renderCheckItem(cp));
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
  container.innerHTML = sections.map(s => {
    const content = s.render ? s.render() : renderPhaseSection(s);
    return `<div class="section ${s.id === activeSection ? 'active' : ''}" id="section-${s.id}">${content}</div>`;
  }).join('');
  updateProgress();
}

function switchSection(id) {
  activeSection = id;
  saveActiveSection();
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.nav-btn[onclick="switchSection('${id}')"]`).classList.add('active');
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + id).classList.add('active');
  updateProgress();
}

function resetAll() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  checked = {};
  try { localStorage.removeItem(STORAGE_KEY) } catch(e) {}
  renderContent();
  document.querySelectorAll('.check-item').forEach(el => el.classList.remove('completed'));
  updateProgress();
}

renderNav();
renderContent();
