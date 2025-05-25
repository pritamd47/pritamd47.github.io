---
layout: page
title: Reservoir Assessment Tool (RAT) - Mekong
description: Remote Sesnsing and Hydrologic Modeling enables tracking of reservoir operations and water availability in the Mekong River Basin.
img: assets/img/rat-mekong/rat-mekong-homepage-screenshot.jpg
importance: 1
category: phd
related_publications: true
---

It is common logic that the **management of water resources in the downstream reaches of a River** is **highly dependent** on **how dams and reservoirs are operated in the upstream**. This is especially true for transboundary rivers – the Brahmaputra, flowing from China -> India -> Bangladesh, the Indus, India -> Pakistan, and the Mekong, flowing through several South East Asian countries. What is not commonly available is the information on how reservoirs are operated in the upstream.

## What is the **Reservoir Assessment Tool (RAT)**?

The Reservoir Assessment Tool, RAT, is _not_ a rodent trained on water resource management.

RAT uses observations from satellites flying over us faster than bullets to observe changes in the storage change of reservoirs. It uses a numerical model to calculate the flow of water across a basin, also called runoff, due to rainfall and snowmelt. Using both these data–independent information on **change in storage** and **runoff**–RAT estimates _how_ reservoirs in the basin are being operated, or their **outflow**.

<div class="caption">
    Conceptual model of the Reservoir Assessment Tool (RAT) model. It has three major components (left to right) - (i) a hydrological model that calculates natural runoff in the basin, (ii) a reservoir outflow estimation module that uses mass balance of incoming water and storage change, and (iii) a satellite remote sensing based reservoir storage change estimation module.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rat-conceptual.jpg" title="conceptual model of RAT" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

This information, for the most part, is gatekept and not shared publicly, most often in the interest of national security and a lack of incentive. RAT fills this gap of data unavailability on reservoir operations using independent observations of the Earth by satellites and computer modeling of natural hydrological processes.

An in-depth explanation of the model can be found at the official documentation of RAT - [ratdocs.io](https://rat-satellitedams.readthedocs.io/en/latest/). An even more in-depth discussion can be found in the papers on the development of RAT, [Biswas et al. (2019)](https://doi.org/10.1016/j.envsoft.2021.105043), {% cite dasReservoirAssessmentTool2022 %} and [Minocha et al. (2024)](https://doi.org/10.5194/gmd-17-3137-2024).

## The RAT-Mekong Decision Support System

Rote information on reservoir outflow is not helpful for driving decisions. Information needs to be presented in a format that is conducive to extracting essential information at a glance to enable decision making. Raw rows and columns of data in machine-readable `.csv` files may be of significant beauty to data scientists, but may induce fever in worst cases when presented to decision-makers.

Hence, we developed the front-end of the RAT-Mekong by keeping the idea of enabling quick visualization of essential reservoir dynamics information at the center. Visit the tool at the [RAT-Mekong website hosted at UW](https://depts.washington.edu/saswe/mekong/).

From the homepage showing the map (left image), select a reservoir of choice. Once selected, a pop up will appear showing it's fluxes–_Inflow_, _Storage Change (∆S)_, and _Outflow_–and the _Surface Area_ (right image).

<div class="caption">
    User Interface of the decision support system showing reservoir dynamics estiamted by RAT-Mekong. Left: homepage, right: time-series of reservoir fluxes.
</div>
<div class="row">
    <div class="col-md-4 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/img/rat-mekong/rat-mekong-homepage-screenshot.png" title="homepage" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-8 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/img/rat-mekong/reservoir-dynamics.png" title="timeseries" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Co-developing with stakeholders

Stakeholders define the requirements of reserch rooted in applications, like that of which led to the development of RAT-Mekong. In this case, the stakeholders were the intergovernmental organization, [Mekong River Commission (MRC)](https://www.mrcmekong.org/). The organization is comprised of the downstream riparian countries of the Mekong River - Laos, Thailand, Vietnam and Cambodia – who manage and monitor the river. As downstream riparian countries, the water in their share of the Mekong River is dependent on how the upstream country, China, operates it's regulatory structures.

There was a need for the ability to monitor dam operations at a basin-wide scale in the Mekong. Through several meetings we first built an understaning of their requirements. They were as follows -

1. Frequent estimation of reservoir operations
2. Accuracy of estimates
3. Additional features, such as considering upstream regulation and forecasting

<div class="caption">
    Meeting stakeholders in Bangkok, Thailand, in 2022 for training and feedback on RAT.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/img/rat-mekong/thailand-training.jpg" title="co-development-meeting" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Based on these requirements, we developed the second version of RAT, with improvements to calibration of the hydrological model and development of a multi-satellite technique for estimating reservoir storage change.

However, development of the tool is just half of the story. The next half is making sure that the stakeholders are able to "own" the tool for use. We achieved this by training personnel from the stakeholder agency and local collaborators. We conducted virtual meeting during COVID, in-person training/hackathon, and user-support as required. The result was [uptake of the tool](https://portal.mrcmekong.org/map-service/rsat) as a decision support system by MRC, and developer-readiness of local collaborators with MRC at the Asian Disaster Preparedness Center (ADPC).

<div class="caption">
    (i) Co-development of Reservoir Assesssment Tool (RAT) with stakeholders from the Mekong River Commission (MRC) and collaborators as the Asian Diaster Preparedness Center (ADPC). (ii) <a href="https://portal.mrcmekong.org/map-service/rsat" target="_blank" rel="noopener noreferrer">RAT adopted by MRC</a> as a reservoir monitoring decision support system.
</div>
<div class="row">
    <div class="col-md-8 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/img/rat-mekong/co-development-training.jpg" title="co-development-meeting" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-md-4 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
        {% include figure.liquid loading="eager" path="assets/img/rat-mekong/rat-in-mrc.png" title="rat-adopted-by-MRC" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Conclusion

RAT-Mekong was developed by keeping stakeholder feedback at the center. Addressing the user needs organically resulted in seeking solutions using the state-of-the-art methods and data, fulfilling dual results of novel research and and it's application. We developed a novel method for combining observations from multiple datasets, with varying observing capabilities and sampling methods, which increased the frequency of observation of reservoir storage change while also improving the accuracy. We also delivered the tool to the end-users, trained them, and it's maintainers at local stakeholder level, so that the tool can be used independent of input from research side. Such a method of applications-driven approach to scientific research is essential for technology developed in academia to cross the "[valley of death](https://journals.ametsoc.org/view/journals/bams/95/8/bams-d-13-00176.1.xml)".
