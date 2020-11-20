# NCBI taxonomy

[![Project Status: Active – The project has reached a stable, usable state and is being actively developed.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active) [![DOI](https://zenodo.org/badge/312718490.svg)](https://zenodo.org/badge/latestdoi/312718490)

![CI](https://github.com/EcoJulia/NCBITaxonomy.jl/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/EcoJulia/NCBITaxonomy.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/EcoJulia/NCBITaxonomy.jl)

![Documentation](https://github.com/EcoJulia/NCBITaxonomy.jl/workflows/Documentation/badge.svg) [![](https://img.shields.io/badge/docs-stable-blue.svg)](https://ecojulia.github.io/NCBITaxonomy.jl/stable) [![](https://img.shields.io/badge/docs-dev-blue.svg)](https://ecojulia.github.io/NCBITaxonomy.jl/dev)

This package provides an interface to the [NCBI Taxonomy][ncbitax]. When
installed, it will download the *latest* version of the taxonomy files from the
NCBI `ftp` service. To update the version of the taxonomy you use, you need to
build the package again.

[ncbitax]: https://www.ncbi.nlm.nih.gov/taxonomy

This package is developed as part of the activities of the Viral Emergence
Research Initiative ([VERENA][verena]) consortium, with financial support from
the Institut de Valorisation des Données ([IVADO][ivado]) at Université de
Montréal.

[verena]: https://www.viralemergence.org/
[ivado]: https://ivado.ca/en/
