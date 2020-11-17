var documenterSearchIndex = {"docs":
[{"location":"lineages/#Navigating-lineages","page":"Navigating lineages","title":"Navigating lineages","text":"","category":"section"},{"location":"lineages/#Core-functions","page":"Navigating lineages","title":"Core functions","text":"","category":"section"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"lineage\nchildren\ndescendants\nparent\nrank","category":"page"},{"location":"lineages/#NCBITaxonomy.lineage","page":"Navigating lineages","title":"NCBITaxonomy.lineage","text":"lineage(tax::NCBITaxon; stop_at::NCBITaxon=ncbi\"root\")\n\nReturns an array of NCBITaxon going up to the root of the taxonomy, or to the optionally specified stop_at taxonomic node.\n\n\n\n\n\n","category":"function"},{"location":"lineages/#NCBITaxonomy.children","page":"Navigating lineages","title":"NCBITaxonomy.children","text":"children(t::NCBITaxon)\n\nReturns the node immediately below the taxon given as argument, or nothing if the taxon is terminal.\n\n\n\n\n\n","category":"function"},{"location":"lineages/#NCBITaxonomy.descendants","page":"Navigating lineages","title":"NCBITaxonomy.descendants","text":"descendants(t::NCBITaxon)\n\nRecurisvely calls children until all terminal nodes under the taxon are reached. Depending on the taxonomic level, and number of taxa under the taxon considered, this can be a long function to run.\n\n\n\n\n\n","category":"function"},{"location":"lineages/#NCBITaxonomy.rank","page":"Navigating lineages","title":"NCBITaxonomy.rank","text":"rank(taxon::NCBITaxon)\n\n\n\n\n\n","category":"function"},{"location":"lineages/#Examples","page":"Navigating lineages","title":"Examples","text":"","category":"section"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"The children function will return a list of NCBITaxon that are immediately descending from the one given as argument. For example, the genus Lamellodiscus contains:","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"using NCBITaxonomy\n\nncbi\"Lamellodiscus\" |> children","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"Note that the parent function does the opposite of children:","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"ncbi\"Lamellodiscus kechemirae\" |> parent","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"To get the full descendants of a taxon (i.e. the children of its children, recursively), we can do:","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"descendants(ncbi\"Diplectanidae\")","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"We can also work upwards in the taxonomy, using the lineage function – it takes an optional stop_at argument, which is the farther up it will go:","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"lineage(ncbi\"Lamellodiscus elegans\"; stop_at=ncbi\"Monogenea\")","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"The rank function is useful to know where in the taxonomy you are:","category":"page"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"[t => rank(t) for t in lineage(ncbi\"Lamellodiscus elegans\"; stop_at=ncbi\"Monogenea\")]","category":"page"},{"location":"lineages/#Internal-functions","page":"Navigating lineages","title":"Internal functions","text":"","category":"section"},{"location":"lineages/","page":"Navigating lineages","title":"Navigating lineages","text":"NCBITaxonomy._descendants\nNCBITaxonomy._children\nNCBITaxonomy._taxa_from_id","category":"page"},{"location":"lineages/#NCBITaxonomy._descendants","page":"Navigating lineages","title":"NCBITaxonomy._descendants","text":"_descendants(id::T) where {T <: Int}\n\nRecursively get the descendants of a given node.\n\n\n\n\n\n","category":"function"},{"location":"lineages/#NCBITaxonomy._children","page":"Navigating lineages","title":"NCBITaxonomy._children","text":"_children(id::T) where {T <: Int}\n\nInternal function to retrieve the id of the children of a given node.\n\n\n\n\n\n","category":"function"},{"location":"lineages/#NCBITaxonomy._taxa_from_id","page":"Navigating lineages","title":"NCBITaxonomy._taxa_from_id","text":"_taxa_from_id(id::Vector{T}) where {T <: Int}\n\nGet a list of NCBITaxon from a vector of ids.\n\n\n\n\n\n","category":"function"},{"location":"#NCBITaxonomy","page":"Index","title":"NCBITaxonomy","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"This package provides an interface to the NCBI Taxonomy. When installed, it will download the latest version of the taxonomy files from the NCBI ftp service. To update the version of the taxonomy you use, you need to build the package again. This package is developed as part of the activities of the Viral Emergence Research Initiative (VERENA) consortium, with financial support from the Institut de Valorisation des Données (IVADO) at Université de Montréal.","category":"page"},{"location":"#Overview-of-capacities","page":"Index","title":"Overview of capacities","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"retrieval of names from the taxonomy\nlisting of children and descendant taxa\nfuzzy matching of names","category":"page"},{"location":"#How-does-it-work?","page":"Index","title":"How does it work?","text":"","category":"section"},{"location":"","page":"Index","title":"Index","text":"Internally, the package relies on the files provided by NCBI to reconstruct the taxonomy – the README for what the files contain can be found here. Note that the files and their expected MD5 checksum are downloaded when the package is built, and the data are not extracted unless the checksum matches. The package will also check that the checksum on the server is different from the version on disk, to avoid downloading data for nothing.","category":"page"},{"location":"","page":"Index","title":"Index","text":"Data are saved as arrow tables when the package is built, and these are loaded when the package is loaded with import or using, as DataFrames. These data frames are not exported, but they are used by the various function of the package. Note also that a number of fields are removed, and some tables are pre-merged - not at build time (so there is no information loss, and you are welcome to dig into the full data frame by reloading the arrow file), but at load time.","category":"page"},{"location":"namefinding/#Finding-taxa","page":"Finding taxa","title":"Finding taxa","text":"","category":"section"},{"location":"namefinding/#The-taxid-function","page":"Finding taxa","title":"The taxid function","text":"","category":"section"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"taxid","category":"page"},{"location":"namefinding/#NCBITaxonomy.taxid","page":"Finding taxa","title":"NCBITaxonomy.taxid","text":"taxid(name::T; fuzzy::Bool = false, verbose::Bool=false) where {T <: String}\n\nReturns the taxonomic ID of a taxon, given as a string. This function searches in the entire names table, which is unlikely to give a good performance when using fuzzy matching. We encourage the use of the namefinder function to build a custom version.\n\n\n\n\n\n","category":"function"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"The taxid function will return a NCBITaxon object, which has two fields: name and id. We do not return the class attribute, because the package will always return the scientific name, as the examples below illustrate:","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"using NCBITaxonomy\ntaxid(\"Bos taurus\")","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"There is a convenience string macro to replace the taxid function:","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"ncbi\"Bos taurus\"","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"Note that because the names database contains vernacular and deprecated names, the scientific name will be returned, no matter what you search","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"taxid(\"cow\")","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"You can pass an additional fuzzy=true keyword argument to the taxid function to perform fuzzy name matching using the Levenshtein distance:","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"taxid(\"Paradiplozon homion\", fuzzy=true)","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"Note that both fuzzy searching and non-standard naming come at a performance cost, so it is preferable to use the strict matching unless necessary.","category":"page"},{"location":"namefinding/#Building-a-better-namefinder","page":"Finding taxa","title":"Building a better namefinder","text":"","category":"section"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"The namefinder function has one job: generating a function that works exactly like taxid, but only searches on a smaller subset of the data. In fact, taxid is a special case of namefinder, which simply searches the whole database.","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"namefinder\ndescendantsfinder","category":"page"},{"location":"namefinding/#NCBITaxonomy.namefinder","page":"Finding taxa","title":"NCBITaxonomy.namefinder","text":"namefinder(df::T) where {T <: DataFrame}\n\nGenerates a name-finding function that takes a string as an argument, and a boolean (fuzzy) as a keyword argument to switch from strict to fuzzy matching. The generated function will return a NCBITaxon for a given string. By default, the function taxid is working on the entire names table, which is going to be slow if there are many names to fuzzy match. The keyword argument verbose (default to false) indicates whether the distance to a fuzzy match must be printed.\n\nUnder strict matching, if no match is found, the namefinder will return nothing. This can be used to switch to the fuzzy namefinder automatically. The fuzzy namefinder uses the findnearest function from StringDistances, which will always return something. The compare function from the same package may be used to see how similar the names are, and to decide whether to keep them.\n\nAltough the input dataframe is supposed to be a subset of the (unexported) names_table, all that is required is that it has the columns tax_id, name, and class. Make of that information what you wish...\n\n\n\n\n\n","category":"function"},{"location":"namefinding/#NCBITaxonomy.descendantsfinder","page":"Finding taxa","title":"NCBITaxonomy.descendantsfinder","text":"descendantsfinder(t::NCBITaxon)\n\nReturns a namefinder for all taxa below the one given as argument. This function calls descendants internally, so it might not be the optimal way when dealing with large groups.\n\n\n\n\n\n","category":"function"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"Here is an illustration of why using namefinders makes sense. Let's say we have to search for a potentially misspelled name:","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"@time taxid(\"Evolavirus\"; fuzzy=true)","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"We can build a more efficient namefinder by selecting the nodes in the taxonomy that belong to the VRL division. Doing so requires to call namefinder on a DataFrame. Note that we are doing some merging here, which results in the data frame we use having more columns than the names data frame – but this does not matter, because the namefinder is not picky about having too much information.","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"using DataFrames, DataFramesMeta\nviralfinder = namefinder(\n         join(\n           @where(\n               select(NCBITaxonomy.nodes_table, [:tax_id, :division_code]),\n               :division_code .== Symbol(\"VRL\")\n           ),\n           NCBITaxonomy.names_table;\n           on = :tax_id\n         )\n       )\n\n@time viralfinder(\"Evolavirus\"; fuzzy=true);","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"For searches in specific groups, the descendantsfinder is a convenient wrapper: it will return a namefinder limited to all taxa below its argument.","category":"page"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"diplectanidfinder = descendantsfinder(taxid(\"Diplectanidae\"))\ndiplectanidfinder(\"Lamellodiscus\")","category":"page"},{"location":"namefinding/#Internal-functions","page":"Finding taxa","title":"Internal functions","text":"","category":"section"},{"location":"namefinding/","page":"Finding taxa","title":"Finding taxa","text":"NCBITaxonomy._get_sciname_from_taxid\nNCBITaxonomy._df_from_taxlist","category":"page"},{"location":"namefinding/#NCBITaxonomy._get_sciname_from_taxid","page":"Finding taxa","title":"NCBITaxonomy._get_sciname_from_taxid","text":"_get_sciname_from_taxid(df::T, id::Int) where {T <: DataFrame}\n\nThis internal function will return a scientific name from a numerical id.\n\n\n\n\n\n","category":"function"},{"location":"namefinding/#NCBITaxonomy._df_from_taxlist","page":"Finding taxa","title":"NCBITaxonomy._df_from_taxlist","text":"_df_from_taxlist(tax::Vector{NCBITaxon})\n\nReturns a subset of the names dataframe based on a vector of taxa.\n\n\n\n\n\n","category":"function"}]
}
