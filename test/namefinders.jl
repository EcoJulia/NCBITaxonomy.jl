module TestNamefinders

    using Test
    using NCBITaxonomy

    dipl = descendantsfinder(ncbi"Diplectanidae")

    lam = dipl("Lamellodiscus elegans")

    @test typeof(lam) == NCBITaxon
    @test lam.name == "Lamellodiscus elegans"

    dipl_2 = namefinder(descendants(ncbi"Diplectanidae"))

    @test dipl_2 == dipl

end