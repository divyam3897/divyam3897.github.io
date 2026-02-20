---
layout: page
title: Divyam Madaan
meta-title: Divyam Madaan
---
<style>
/* Force Teaching Section to match Service Section */
.service-section ul,
.teaching-section ul {
  padding-left: 20px;
  color: #334155;
  margin-bottom: 20px;
}
/* Dark Mode Override */
body.dark-mode .service-section ul,
body.dark-mode .teaching-section ul {
  color: #f1f5f9 !important;
}

.service-section p,
.teaching-section p {
    margin-bottom: 5px;
    margin-top: 15px;
}

/* Force Dark Mode Header Visibility */
body.dark-mode .page-heading h1,
body.dark-mode .page-subheading,
body.dark-mode .post-title,
body.dark-mode .post-subtitle {
  color: #f1f5f9 !important;
}

/* Ensure BibTeX container looks right */
.bibtex-container {
  display: none; 
  margin-top: 10px; 
  background: #f1f5f9; 
  padding: 10px; 
  border-radius: 4px; 
  font-size: 12px; 
  overflow-x: auto;
}
body.dark-mode .bibtex-container {
  background: #334155; 
  color: #f1f5f9;
}
</style>

<script>
// Inline JS to ensure functionality
window.toggleBibtex = function(id) {
    var el = document.getElementById(id);
    if (el) {
        if (getComputedStyle(el).display === 'none') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    } else {
        console.error("BibTeX element not found:", id);
    }
};
</script>
<div class="profile-section">
  <div class="profile-photo-container">
    <img class="profile-photo" src="/img/avatar.png" alt="Divyam Madaan" />
  </div>
  <div class="profile-info">
    <p class="about-text">
    I am a fifth year Ph.D. student at <a target="_blank" href="https://cims.nyu.edu/dynamic/">New York University, Courant Institute of Mathematical Sciences</a>, advised by <a target="_blank" href="https://www.spchopra.org">Sumit Chopra</a> and <a target="_blank" href="https://kyunghyuncho.me">Kyunghyun Cho</a>. Previously, I completed my Masters at the <a target="_blank" href="https://www.mlai-kaist.com/">MLAI Lab</a> at KAIST, advised by <a target="_blank" href="http://www.sungjuhwang.com/">Sung Ju Hwang</a>.
    </p>
    <p class="about-text">
    My research focuses on (a) developing methods that harness information from <strong>multiple modalities</strong>, and (b) improving models' ability to <strong>generalize across time</strong>.
    </p>
    <p>
      <a href="javascript:void(0)" onclick="document.getElementById('bio-modal').style.display='flex'" style="font-weight:600; font-size:14px;">Read Formal Bio &rarr;</a>
    </p>
    <div class="social-links">
      <a href="mailto:divyam.madaan@nyu.edu"><i class="fa fa-envelope"></i> Email</a>
      <a href="https://scholar.google.com/citations?user=DNk4dZkAAAAJ&hl=en" target="_blank"><i class="fa fa-graduation-cap"></i> Scholar</a>
      <a href="https://github.com/divyam3897" target="_blank"><i class="fa fa-github"></i> GitHub</a>
      <a href="https://x.com/dmadaan_" target="_blank"><i class="fa fa-twitter"></i> Twitter</a>
      <a href="https://linkedin.com/in/dmadaan3897/" target="_blank"><i class="fa fa-linkedin"></i> LinkedIn</a>
    </div>

    <!-- Bio Modal -->
    <div id="bio-modal" class="cmdk-overlay" style="display:none; z-index:10000;" onclick="if(event.target === this) this.style.display='none'">
      <div class="cmdk-content" style="padding:20px; max-width:600px; line-height:1.6;">
        <h3 style="margin-top:0;">Divyam Madaan</h3>
        <p><strong>Divyam Madaan</strong> is a fifth-year Ph.D. student at <a target="_blank" href="https://cims.nyu.edu/dynamic/">New York University</a>, advised by <a target="_blank" href="https://www.spchopra.org">Sumit Chopra</a> and <a target="_blank" href="https://kyunghyuncho.me">Kyunghyun Cho</a>. His research focuses on developing models that can effectively learn from multiple modalities and generalize across distribution shifts, with a special emphasis on healthcare applications.</p>
        <p>Prior to NYU, he earned his M.S. in Computer Science from KAIST, where he worked on model robustness against adversarial examples and continual adaptation to evolving data and architectures. His work has been published at leading venues including ICML, NeurIPS, CVPR and ICLR, where he has also been recognized with oral and spotlight presentation awards.</p>
        <button onclick="document.getElementById('bio-modal').style.display='none'" style="margin-top:10px; padding:8px 16px; border:none; background:#333; color:#fff; border-radius:4px; cursor:pointer; font-weight:500;">Close Bio</button>
      </div>
    </div>
  </div>
</div>

<!-- News section removed -->

<h3 class="section-heading">Publications</h3>
<div id="pub-filter-container">
  <button class="pub-filter-btn active" onclick="filterPubs('selected')">Selected Publications</button>
  <button class="pub-filter-btn" onclick="filterPubs('all')">All Publications</button>
</div>



<div class="pub-entry" data-selected="true">
  <div class="pub-title"><a href="https://arxiv.org/abs/2602.16979" target="_blank">Characterizing the Predictive Impact of Modalities with Supervised Latent-Variable Modeling</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Sumit Chopra, Kyunghyun Cho</div>
  <div class="pub-venue">Preprint 2026 <span class="badge-preprint">Preprint</span></div>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/2602.16979" target="_blank" rel="noopener">PDF</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-primo')">BibTeX</a>
  </div>
  <div id="bib-primo" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@article{madaan2026characterizing,
  title={Characterizing the Predictive Impact of Modalities with Supervised Latent-Variable Modeling},
  author={Madaan, Divyam and Chopra, Sumit and Cho, Kyunghyun},
  journal={arXiv preprint arXiv:2602.16979},
  year={2026}
}</pre>
  </div>
</div>

<div class="pub-entry" data-selected="true">
  <div class="pub-title"><a href="https://www.arxiv.org/pdf/2509.23487" target="_blank">Temporal Generalization: A Reality Check</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Sumit Chopra, Kyunghyun Cho</div>
  <div class="pub-venue">International Conference on Learning Representations (ICLR) 2026 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://www.arxiv.org/pdf/2509.23487" target="_blank" rel="noopener">PDF</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-temporal-gen')">BibTeX</a>
  </div>
  <div id="bib-temporal-gen" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2026temporal,
  title={Temporal Generalization: A Reality Check},
  author={Madaan, Divyam and Chopra, Sumit and Cho, Kyunghyun},
  booktitle={International Conference on Learning Representations},
  year={2026}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://arxiv.org/pdf/2509.23499" target="_blank">Multi-modal Data Spectrum: Multi-modal Datasets are Multi-dimensional</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Varshan Muhunthan, Kyunghyun Cho, Sumit Chopra</div>
  <div class="pub-venue">International Conference on Learning Representations (ICLR) 2026 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/2509.23499" target="_blank" rel="noopener">PDF</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-multimodal-spectrum')">BibTeX</a>
  </div>
  <div id="bib-multimodal-spectrum" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2026multimodal,
  title={Multi-modal Data Spectrum: Multi-modal Datasets are Multi-dimensional},
  author={Madaan, Divyam and Muhunthan, Varshan and Cho, Kyunghyun and Chopra, Sumit},
  booktitle={International Conference on Learning Representations},
  year={2026}
}</pre>
  </div>
</div>

<div class="pub-entry" data-selected="true">
  <div class="pub-title"><a href="https://openreview.net/forum?id=XAKALzI3Gw" target="_blank">Jointly Modeling Inter- &amp; Intra-Modality Dependencies for Multi-modal Learning</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Taro Makino, Sumit Chopra, Kyunghyun Cho</div>
  <div class="pub-venue">Neural Information Processing Systems (NeurIPS) 2024 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=XAKALzI3Gw" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/divyam3897/multimodal_learning" target="_blank" rel="noopener">Code</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-jointly-modeling')">BibTeX</a>
  </div>
  <div id="bib-jointly-modeling" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2024jointly,
  title={Jointly Modeling Inter- & Intra-Modality Dependencies for Multi-modal Learning},
  author={Madaan, Divyam and Makino, Taro and Chopra, Sumit and Cho, Kyunghyun},
  booktitle={Advances in Neural Information Processing Systems},
  year={2024}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://proceedings.mlr.press/v259/huang25a.html" target="_blank">HIST-AID: Leveraging Historical Patient Reports for Enhanced Automatic Diagnosis</a></div>
  <div class="pub-authors">Haoxu Huang, Cem M. Deniz, Kyunghyun Cho, Sumit Chopra, <strong>Divyam Madaan</strong></div>
  <div class="pub-venue">Machine Learning for Health (ML4H) 2024 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/2411.10684" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/NoTody/HIST-AID/" target="_blank" rel="noopener">Code</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-hist-aid')">BibTeX</a>
  </div>
  <div id="bib-hist-aid" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{huang2024histaid,
  title={HIST-AID: Leveraging Historical Patient Reports for Enhanced Automatic Diagnosis},
  author={Huang, Haoxu and Deniz, Cem M and Cho, Kyunghyun and Chopra, Sumit and Madaan, Divyam},
  booktitle={Machine Learning for Health},
  year={2024}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://alz.confex.com/alz/2024/meetingapp.cgi/Paper/89281" target="_blank">Predicting Alzheimer's Diseases and Related Dementias in 3-year timeframe with AI Foundation Model on Electronic Health Records</a></div>
  <div class="pub-authors">Weicheng Zhu, Huanze Tang, Hao Zhang, Haresh Rengaraj Rajamohan, Shih-Lun Huang, Xinyue Ma, Ankush Chaudhari, <strong>Divyam Madaan</strong>, Elaf Almahmoud, Sumit Chopra, John A Dodson, Abraham A Brody, Arjun V Masurkar, Narges Razavian</div>
  <div class="pub-venue">Alzheimer's Association International Conference 2024 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
      <a href="javascript:void(0)" onclick="toggleBibtex('bib-alzheimers')">BibTeX</a>
  </div>
   <div id="bib-alzheimers" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{zhu2024predicting,
  title={Predicting Alzheimer's Diseases and Related Dementias in 3-year timeframe with AI Foundation Model on Electronic Health Records},
  author={Zhu, Weicheng and others},
  booktitle={Alzheimer's Association International Conference},
  year={2024}
}</pre>
  </div>
</div>

<div class="pub-entry" data-selected="true">
  <div class="pub-title"><a href="https://openreview.net/forum?id=f7VHa2mwDEq" target="_blank">Heterogeneous Continual Learning</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Hongxu Yin, Wonmin Byeon, Jan Kautz, Pavlo Molchanov</div>
  <div class="pub-venue">Conference on Computer Vision and Pattern Recognition (CVPR) 2023 (Highlight) <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=f7VHa2mwDEq" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/NVlabs/HCL/tree/main" target="_blank" rel="noopener">Code</a>
    <a href="https://www.youtube.com/watch?v=8Il-bpWXeso" target="_blank" rel="noopener">Video</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-hcl')">BibTeX</a>
  </div>
  <div id="bib-hcl" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2023heterogeneous,
  title={Heterogeneous Continual Learning},
  author={Madaan, Divyam and Yin, Hongxu and Byeon, Wonmin and Kautz, Jan and Molchanov, Pavlo},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  year={2023}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://nlpsurvey.net/" target="_blank">What Do NLP Researchers Believe? Results of the NLP Community Metasurvey</a></div>
  <div class="pub-authors">Julian Michael, Ari Holtzman, Alicia Parrish, Aaron Mueller, Alex Wang, Angelica Chen, <strong>Divyam Madaan</strong>, Nikita Nangia, Richard Yuanzhe Pang, Jason Phang, Samuel R. Bowman</div>
  <div class="pub-venue">Association for Computational Linguistics (ACL) 2023 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://aclanthology.org/2023.acl-long.903.pdf" target="_blank" rel="noopener">PDF</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-nlp-survey')">BibTeX</a>
  </div>
  <div id="bib-nlp-survey" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{michael2023nlp,
  title={What Do NLP Researchers Believe? Results of the NLP Community Metasurvey},
  author={Michael, Julian and others},
  booktitle={Association for Computational Linguistics},
  year={2023}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://openreview.net/forum?id=f7VHa2mwDEq" target="_blank">On Sensitivity and Robustness of Normalization Schemes to Input Distribution Shifts in Automatic MR Image Diagnosis</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Daniel Sodickson, Kyunghyun Cho, Sumit Chopra</div>
  <div class="pub-venue">Medical Imaging with Deep Learning (MIDL) 2023 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
      <a href="javascript:void(0)" onclick="toggleBibtex('bib-midl-sensitivity')">BibTeX</a>
  </div>
  <div id="bib-midl-sensitivity" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2023sensitivity,
  title={On Sensitivity and Robustness of Normalization Schemes to Input Distribution Shifts in Automatic MR Image Diagnosis},
  author={Madaan, Divyam and Sodickson, Daniel and Cho, Kyunghyun and Chopra, Sumit},
  booktitle={Medical Imaging with Deep Learning},
  year={2023}
}</pre>
  </div>
</div>

<div class="pub-entry" data-selected="true">
  <div class="pub-title"><a href="https://arxiv.org/abs/2110.06976" target="_blank">Representational Continuity for Unsupervised Continual Learning</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Jaehong Yoon, Yuanchun Li, Yunxin Liu, Sung Ju Hwang</div>
  <div class="pub-venue">International Conference on Learning Representations (ICLR) 2022 (Oral presentation) <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=9Hrka5PA7LW" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/divyam3897/UCL" target="_blank" rel="noopener">Code</a>
    <a href="https://iclr.cc/virtual/2022/oral/7120" target="_blank" rel="noopener">Video</a>
    <a href="https://docs.google.com/presentation/d/1PR6627CBK7C6JauEPJK80H3WSb5ecaBaT6QJZJxFLuY/edit?usp=sharing" target="_blank" rel="noopener">Slides</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-rep-continuity')">BibTeX</a>
  </div>
  <div id="bib-rep-continuity" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2022representational,
  title={Representational Continuity for Unsupervised Continual Learning},
  author={Madaan, Divyam and Yoon, Jaehong and Li, Yuanchun and Liu, Yunxin and Hwang, Sung Ju},
  booktitle={International Conference on Learning Representations},
  year={2022}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://arxiv.org/abs/2106.01085" target="_blank">Online Coreset Selection for Rehearsal-based Continual Learning</a></div>
  <div class="pub-authors">Jaehong Yoon, <strong>Divyam Madaan</strong>, Eunho Yang, Sung Ju Hwang</div>
  <div class="pub-venue">International Conference on Learning Representations (ICLR) 2022 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://openreview.net/pdf?id=f9D-5WNG4Nv" target="_blank" rel="noopener">PDF</a>
    <a href="https://iclr.cc/virtual/2022/poster/6362" target="_blank" rel="noopener">Video</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-online-coreset')">BibTeX</a>
  </div>
  <div id="bib-online-coreset" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{yoon2022online,
  title={Online Coreset Selection for Rehearsal-based Continual Learning},
  author={Yoon, Jaehong and Madaan, Divyam and Yang, Eunho and Hwang, Sung Ju},
  booktitle={International Conference on Learning Representations},
  year={2022}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://arxiv.org/abs/2006.12135" target="_blank">Learning to Generate Noise for Multi-Attack Robustness</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Jinwoo Shin, Sung Ju Hwang</div>
  <div class="pub-venue">
    International Conference for Machine Learning (ICML) 2021 <span class="badge-conference">Conference</span><br>
    NeurIPS Meta-Learning Workshop 2020 <span class="badge-workshop">Workshop</span>
  </div>
  <div class="pub-links">
    <a href="https://arxiv.org/abs/2006.12135" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/divyam3897/MNG_AC" target="_blank" rel="noopener">Code</a>
    <a href="https://icml.cc/virtual/2021/spotlight/9868" target="_blank" rel="noopener">Video</a>
    <a href="https://docs.google.com/presentation/d/1iRnpt6QheH1gZ1n1kJ6SEykafJdLlQSDnySIP0dJqY0/edit?usp=sharing" target="_blank" rel="noopener">Slides</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-noise-gen')">BibTeX</a>
  </div>
  <div id="bib-noise-gen" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2021learning,
  title={Learning to Generate Noise for Multi-Attack Robustness},
  author={Madaan, Divyam and Shin, Jinwoo and Hwang, Sung Ju},
  booktitle={International Conference on Machine Learning},
  year={2021}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://proceedings.icml.cc/static/paper_files/icml/2020/770-Paper.pdf" target="_blank">Adversarial Neural Pruning with Latent Vulnerability Suppression</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Jinwoo Shin, Sung Ju Hwang</div>
  <div class="pub-venue">
    International Conference for Machine Learning (ICML) 2020 <span class="badge-conference">Conference</span><br>
    NeurIPS Safety and Robustness in Decision Making Workshop 2019 <span class="badge-workshop">Workshop</span>
  </div>
  <div class="pub-links">
    <a href="https://proceedings.icml.cc/static/paper_files/icml/2020/770-Paper.pdf" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/divyam3897/ANP_VS" target="_blank" rel="noopener">Code</a>
    <a href="https://slideslive.com/38927607/adversarial-neural-pruning-with-latent-vulnerability-suppression" target="_blank" rel="noopener">Video</a>
    <a href="https://docs.google.com/presentation/d/1EoYN51q1vBY61qtq8oVJ7tPYQP9fSLeVJgtWfMcpmpA/edit?usp=sharing" target="_blank" rel="noopener">Slides</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-anp')">BibTeX</a>
  </div>
  <div id="bib-anp" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2020adversarial,
  title={Adversarial Neural Pruning with Latent Vulnerability Suppression},
  author={Madaan, Divyam and Shin, Jinwoo and Hwang, Sung Ju},
  booktitle={International Conference on Machine Learning},
  year={2020}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://ieeexplore.ieee.org/document/8969343" target="_blank">VayuAnukulani: Adaptive Memory Networks for Air Pollution Forecasting</a></div>
  <div class="pub-authors"><strong>Divyam Madaan</strong>, Radhika Dua, Prerana Mukherjee, Brejesh Lall</div>
  <div class="pub-venue">IEEE Global Conference on Signal and Information Processing (GlobalSIP) 2019 <span class="badge-conference">Conference</span></div>
  <div class="pub-links">
    <a href="https://ieeexplore.ieee.org/document/8969343" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/divyam3897/VayuAnukulani/" target="_blank" rel="noopener">Code</a>
    <a href="https://sigport.org/sites/default/files/docs/VayuAnukulani_globalSip.pdf" target="_blank" rel="noopener">Slides</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-bayu')">BibTeX</a>
  </div>
   <div id="bib-bayu" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@inproceedings{madaan2019vayuanukulani,
  title={VayuAnukulani: Adaptive Memory Networks for Air Pollution Forecasting},
  author={Madaan, Divyam and Dua, Radhika and Mukherjee, Prerana and Lall, Brejesh},
  booktitle={IEEE Global Conference on Signal and Information Processing},
  year={2019}
}</pre>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-title"><a href="https://arxiv.org/abs/1905.13678" target="_blank">Learning Sparse Networks Using Targeted Dropout</a></div>
  <div class="pub-authors">Aidan N. Gomez, Ivan Zhang, Siddhartha Rao Kamalakara, <strong>Divyam Madaan</strong>, Kevin Swersky, Yarin Gal, Geoffrey E. Hinton</div>
  <div class="pub-venue">Preprint 2019 <span class="badge-preprint">Preprint</span></div>
  <div class="pub-links">
    <a href="https://arxiv.org/pdf/1905.13678.pdf" target="_blank" rel="noopener">PDF</a>
    <a href="https://github.com/for-ai/TD" target="_blank" rel="noopener">Code</a>
    <a href="javascript:void(0)" onclick="toggleBibtex('bib-sparse-networks')">BibTeX</a>
  </div>
  <div id="bib-sparse-networks" style="display:none; margin-top:10px; background:#f1f5f9; padding:10px; border-radius:4px; font-size:12px; overflow-x:auto;">
<pre>@article{gomez2019learning,
  title={Learning Sparse Networks Using Targeted Dropout},
  author={Gomez, Aidan N and Zhang, Ivan and Kamalakara, Siddhartha Rao and Madaan, Divyam and Swersky, Kevin and Gal, Yarin and Hinton, Geoffrey E},
  journal={arXiv preprint arXiv:1905.13678},
  year={2019}
}</pre>
  </div>
</div>

<h3 class="section-heading">Academic Service</h3>

<div class="service-section">
<p><strong>Conference Reviewer</strong></p>
<ul>
  <li>Neural Information Processing Systems (NeurIPS) (2020 – 2025)</li>
  <li>International Conference on Machine Learning (ICML) (2020 – 2025)</li>
  <li>International Conference on Learning Representations (ICLR) (2022 – 2026)</li>
  <li>Conference on Lifelong Learning Agents (CoLLAs) (2023, 2025)</li>
  <li>Conference on Health, Inference, and Learning (CHIL) 2025</li>
  <li>International Conference on Artificial Intelligence and Statistics (AISTATS) 2025</li>
  <li>Association for the Advancement of Artificial Intelligence (AAAI) 2021</li>
  <li>Asian Conference on Machine Learning (ACML) 2019-2020</li>
</ul>

<p><strong>Journal Reviewer</strong></p>
<ul>
     <li>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)</li>
     <li>International Journal of Computer Vision (IJCV)</li>
     <li>Transactions on Machine Learning Research (TMLR)</li>
</ul>

<p><strong>Workshop Reviewer</strong></p>
<ul>
  <li>ContinualAI Unconference 2023</li>
  <li>NeurIPS MetaLearning Workshop 2020</li>
  <li>ICML New Frontiers in Adversarial Machine Learning Workshop 2020</li>
</ul>

<p><strong>Volunteer</strong></p>
<ul>
  <li>International Conference on Learning Representations (ICLR) (2020, 2022)</li>
  <li>International Conference on Machine Learning (ICML) (2020, 2021)</li>
  <li>Neural Information Processing Systems (NeurIPS) (2020, 2022)</li>
</ul>
</div>

<h3 class="section-heading">Teaching</h3>
<div class="teaching-section">
<p><strong>New York University, Teaching Assistant</strong> (Fall 2022 – Spring 2025)</p>
<ul>
  <li>Machine Learning (DS-GA 1003) – Spring 2025</li>
  <li>Natural Language Processing with Representation Learning (DS-GA 1011) – Fall 2024</li>
  <li>Causal Inference (DS-GA 3001) – Spring 2024</li>
  <li>Fundamentals of Machine Learning (CSCI-UA 473) – Fall 2023, 2025</li>
  <li>Machine Learning for Healthcare (CSCI-GA 3033 / DS-GA 3001) – Fall 2022</li>
</ul>
</div>
