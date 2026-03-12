---
layout: project_post
title: "Multi-Modal Data Spectrum"
subtitle: "Multi-Modal Datasets are Multi-Dimensional"
tags: ['ICLR']
excerpt: "We characterize inter- and intra-modality dependencies across 23 VQA benchmarks. Many datasets built to fix text-only shortcuts have inadvertently introduced image-only biases. We uncover how evaluating VLMs is often a cat-and-mouse game between biases and datasets."
---

<link rel="stylesheet" href="/css/blogpost.css">

<div class="hero-section">
<div class="hero-background" style="background-image: url('/img/multimodal-data-spectrum/blog_figure.png');"></div>
<div class="hero-overlay"></div>
<div class="hero-inner">

<h1>Multi-Modal Data Spectrum</h1>
<h2 class="hero-subheading">Multi-Modal Datasets are Multi-Dimensional</h2>

<p class="hero-authors">
<a href="https://dmadaan.com/">Divyam Madaan</a><sup>1</sup>,
<a href="https://openreview.net/profile?id=~Varshan_Muhunthan1">Varshan Muhunthan</a><sup>1</sup>,
<a href="https://kyunghyuncho.me/">Kyunghyun Cho</a><sup>1,2,4</sup>,
<a href="https://cs.nyu.edu/~sumit/">Sumit Chopra</a><sup>1,2,3</sup>
</p>
<p class="hero-affiliations"><sup>1</sup>Courant, NYU &nbsp; <sup>2</sup>CDS, NYU &nbsp; <sup>3</sup>Grossman, NYU &nbsp; <sup>4</sup>CIFAR LMB</p>

<div class="hero-buttons">
<a href="https://arxiv.org/abs/2509.23499"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> arXiv</a>
<a href="https://arxiv.org/pdf/2509.23499"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> Paper</a>
<a href="https://github.com/divyam3897/multimodal-spectrum"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> Code</a>
</div>

</div>
</div>

<div class="post-layout-wrapper">

<aside class="toc-sidebar">
<p class="toc-title">Contents</p>
<nav>
<ul>
<li><a href="#overview">Overview</a></li>
<li><a href="#quantifying-the-multi-modal-data-spectrum">Quantifying the Multi-Modal Data Spectrum</a>
  <ul>
    <li><a href="#what-happens-now">What Happens Right Now?</a></li>
    <li><a href="#what-can-we-do">What Can We Do Differently?</a></li>
  </ul>
</li>
<li><a href="#every-benchmark-different">Every Benchmark is Different</a></li>
<li><a href="#takeaway-message">Recommendation</a></li>
</ul>
</nav>
</aside>

<div class="post-main-content" markdown="1">

<div class="takeaways-box" id="takeaways">
<h2>TL;DR</h2>
<ul>
<li><strong>We show that no multi-modal dataset is truly multi-modal</strong>, each measures different dimensions of multimodal learning with varying strengths of intra- and inter-modality dependencies.</li>
<li>We use a simple <strong>modality shuffling</strong> framework to understand these dependencies. We encourage any benchmark creator or model evaluator to adopt this framework.</li>
<li><strong>Scaling or architectural changes don't help.</strong> Larger and more capable models get better at exploiting intra-modality dependencies.</li>

</ul>
</div>

<hr class="section-divider">

<h2 id="overview">Overview</h2>

Proposing new multimodal benchmarks and evaluating models on more and more of these benchmarks has been a common practice. For a new benchmark or model, there exist more than 200 benchmarks to choose from. Every paper evaluates on a different subset of these benchmarks. Every new benchmark is proposed to fix some limitations of the previous benchmarks.

Despite this, there is a lack of clarity on whether these benchmarks measure what we anticipate. For instance, when a model achieves 85% on a VQA dataset, what are we truly measuring? What datasets do we need to evaluate to make this statement? Are the benchmarks designed to measure multimodal abilities?

Some benchmarks claim to require both modalities, but follow-up papers demonstrate that models can solve the task with a single modality for a large number of examples in the dataset. There has been a cat-and-mouse game of benchmark development and subsequent circumvention. To minimize this, we conduct a systematic study to understand the interplay between intra-modality dependencies (the contribution of an individual modality to a target task) and inter-modality dependencies (the relationships between modalities and the target task).


<figure class="post-figure">
<img src="/img/multimodal-data-spectrum/concept_diagram.png" alt="Concept Diagram showing permuted image and permuted question scenarios">
<figcaption><strong>(Left)</strong> The models answers about layers of Earth even when the image is replaced
by an unrelated diagram of a brain. <strong>(Right)</strong> The model identifies a symbiotic relationship from
the image even when the question is unrelated. These examples highlight a failure of multi-modal
reasoning, where models exploit uni-modal priors with the options to obtain an associated answer.</figcaption>
</figure>

We evaluate on 23 multiple-choice visual question answering (MCVQA) benchmarks, spanning applications such as general visual question answering, knowledge-based reasoning, real-world spatial understanding, optical character recognition (OCR), and document and chart understanding. Across different model sizes and types, we find that MLLMs often exploit intra-modality dependencies, answering questions correctly even when a relevant input modality is replaced with corrupted or random data.

<h2 id="quantifying-the-multi-modal-data-spectrum">Quantifying the Multi-Modal Data Spectrum</h2>

For a multiple choice visual question answering task, given an image, a question, and a target answer selected from a set of options, the answer can be obtained with two types of dependencies:

**Intra-modality dependency:** The answer depends on a single modality. For instance, we can answer "How many layers does the Earth have?" using only the text.

**Inter-modality dependency:** The answer depends on the interaction between modalities. The image alone or the question independently cannot answer the question.

<h3 id="what-happens-now">What Happens Right Now?</h3>

Most benchmarks have a *mix* of both, and we are often in the illusion of believing that the datasets primarily contain inter-modality dependencies. Out of the 23 datasets we evaluated, only four of them contained a domincance of inter-modality dependencies.

A new benchmark is often proposed to remove intra-modality dependencies in the previous benchmarks. Every time, models continue to use unanticipated intra-modality dependencies. Without a way to *measure* what dependencies a benchmark actually contains, we cannot make true progress.

<h3 id="what-can-we-do">What Can We Do Differently?</h3>

To measure this systematically, for each sample, we run the model under four conditions:

- <span class="radar-color yellow">Standard</span>: Original image + original question
- <span class="radar-color green">Image only</span>: Keep the image and options intact, replace the question with one from a random sample
- <span class="radar-color blue">Text only</span>: Keep the question and options intact, replace the image with one from a random sample
- <span class="radar-color orange">Random</span>: Replace both from random samples — this gives chance-level performance

We use **modality shuffling** instead of blank images or empty text because zeroing out inputs creates out-of-distribution artifacts that make models behave unpredictably. Shuffling captures the intra-modality dependencies between an individual modality and the label. To avoid being misled by quirks of any single model, we run this across multiple architectures and aggregate with a **majority-vote ensemble**.

<!-- 
Here's the cycle the field has been stuck in for years. It's worth spelling out because it explains why we have 200+ benchmarks and still don't know what they measure.

The original **VQA dataset** had strong language priors. Models could answer "What color is the banana?" with "yellow" without looking at the banana. So researchers built **VQAv2**, balancing answers to force visual grounding. Then it turned out models still found shortcuts, so **VQA-CP** came along, changing the answer distribution between train and test to penalize question-only strategies. Then **VQA-CE** and **VQA-VS** exposed yet more multi-modal shortcuts. More recently, **MMMU-Pro** was built to fix artifacts found in **MMMU**.



<h2 id="what-models-do">What Models Are Actually Doing</h2> -->


<h2 id="every-benchmark-different">Every Benchmark is Different</h2>

We ran this across **23 benchmarks** spanning general VQA, knowledge-based reasoning, spatial understanding, OCR, chart comprehension. The radar plots show the ensemble performance under all four conditions. Some benchmarks are mostly solvable with just text, others with just the image, and some require both. Even within a benchmark, the model performance varies significantly.

<figure class="post-figure">
<div class="figure-row">
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/radar_g1.png" alt="General and Expert VQA radar plot" class="chart-img">
</div>
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/radar_g2.png" alt="Spatial and OCR radar plot" class="chart-img">
</div>
</div>
<figcaption><strong>(Left)</strong> General and expert VQA benchmarks. <strong>(Right)</strong> Datasets evaluating <span class="radar-color purple">spatial understanding</span> and <span class="radar-color tomato">OCR, data and chart understanding</span>. The plots show the comparison of an ensemble of <span class="radar-color yellow">standard</span> MLLMs with <span class="radar-color green">image only</span>, <span class="radar-color blue">text only</span> and <span class="radar-color orange">random</span> performance.</figcaption>
</figure>

We further show the performance for a few datasets across different model sizes and types. The dependencies remain mostly consistent across these varied model types and sizes.

<figure class="post-figure">
<div class="figure-row">
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/mmmu_model_sizes.png" alt="MMMU model size comparison" class="chart-img">
</div>
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/mmmu_model_types.png" alt="MMMU model type comparison" class="chart-img">
</div>
</div>
<div class="figure-row" style="margin-bottom: 0;">
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/mmmupro_model_sizes.png" alt="MMMU Pro model size comparison" class="chart-img">
</div>
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/mmmupro_model_types.png" alt="MMMU Pro model type comparison" class="chart-img">
</div>
</div>
<figcaption>Performance of various models across datasets based on specific dependencies for MMMU (top row) and MMMU Pro (bottom row) across model sizes <strong>(left)</strong> and model types <strong>(right)</strong>. The bars represent <span class="radar-color yellow">standard accuracy</span> and attributed contributions from <span class="radar-color blue">text</span>, <span class="radar-color green">image</span>, and <span class="radar-color orange">random</span> (bars are in the same order).</figcaption>
</figure>

We also examine subcategory-level results, which reveal that even a benchmark that looks balanced overall can hide categories that are completely solvable from one modality.

<figure class="post-figure">
<div class="figure-row" style="margin-bottom: 0;">
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/mmmu_subcategories.png" alt="MMMU subcategory radar" class="chart-img">
</div>
<div class="figure-panel">
<img src="/img/multimodal-data-spectrum/scienceqa_subcategories.png" alt="ScienceQA subcategory radar" class="chart-img">
</div>
</div>
<figcaption>Subcategory analysis for MMMU <strong>(left)</strong> and ScienceQA <strong>(right)</strong>.</figcaption>
</figure>

<h2 id="takeaway-message">Recommendation</h2>
 
 We wrote this paper because we think the field needs to measure what we are building through a benchmark and what we want to capture before building the next 200 benchmarks. A single accuracy number on a benchmark is not enough. We encourage future work to report what happens when you only use an individual modality for a given multimodal model. This is because even a benchmark that looks balanced overall can hide categories that are completely solvable from one modality.

We believe that meaningful progress in multimodal learning cannot be achieved simply by developing more benchmarks or chasing leaderboard metrics. Instead, we must critically assess the existing evaluation methods. This includes moving beyond standard multiple-choice formats, incorporating scenarios where models should abstain when they are uncertain, and examining how a model arrives at an answer rather than only what answer it produces.

<div class="citation-section" id="citation">

<h2>BibTeX</h2>

<div class="bibtex-code">@inproceedings{madaan2026multimodal,
  title={Multi-Modal Data Spectrum: Multi-Modal Datasets
         Are Multi-Dimensional},
  author={Divyam Madaan and Varshan Muhunthan and
          Kyunghyun Cho and Sumit Chopra},
  booktitle={The Fourteenth International Conference
             on Learning Representations},
  year={2026},
  url={https://openreview.net/forum?id=tTGdt3ZKca}
}</div>

</div>

</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var tocLinks = document.querySelectorAll('.toc-sidebar nav a');
  var sections = [];

  tocLinks.forEach(function(link) {
    var id = link.getAttribute('href').substring(1);
    var section = document.getElementById(id);
    if (section) sections.push({ id: id, el: section, link: link });
  });

  function updateActive() {
    var current = '';
    var scrollPos = window.scrollY + 120;
    var heroSection = document.querySelector('.hero-section');
    var footerVisible = document.body.classList.contains('footer-visible');
    var sidebar = document.querySelector('.toc-sidebar');
    
    if (sidebar) {
      if (heroSection && window.scrollY > heroSection.offsetHeight * 0.7 && !footerVisible) {
          sidebar.classList.add('show-toc');
      } else {
          sidebar.classList.remove('show-toc');
      }
    }

    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.offsetTop <= scrollPos) {
        current = sections[i].id;
      }
    }

    tocLinks.forEach(function(link) {
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  
  var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        document.body.classList.add('footer-visible');
    } else {
        document.body.classList.remove('footer-visible');
    }
    updateActive();
  }, { threshold: [0.0] });
  
  var postLayoutDiv = document.querySelector('.post-layout-wrapper');
  if (postLayoutDiv && postLayoutDiv.parentElement && postLayoutDiv.parentElement.nextElementSibling) {
      observer.observe(postLayoutDiv.parentElement.nextElementSibling);
  }
  
  updateActive();
});
</script>
