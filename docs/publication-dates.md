# Publication months

`_data/publications.yml` stores `month` as an integer from 1 to 12, without a
leading zero. Existing `year`, bibliography, tags, images, and YAML record order
are retained. The original text-only page is unchanged.

The Papers section on `publications-gallery.md` sorts years descending, then
months descending within each year. Equal-month entries retain their previous
display order. A record with an omitted or null `month` appears at the end of
its year. Japanese Articles and Books retain their previous ordering.

## Date convention

- Journal articles: publication month of the cited volume/issue, rather than an
  earlier online-first date.
- Continuous-publication journals (Nature Communications and Scientific
  Reports): the article's publication month, because the annual volume/issue
  does not identify a monthly issue. Crossref's December date for the entire
  annual issue is not the individual article's publication date.
- arXiv preprints: first submission/publication month, not a subsequent revision.

All sources below were retrieved on 2026-10-23. Cambridge and arXiv pages were
read directly. The other publisher pages were attempted, but returned HTTP 403
or a proxy connection denial; their publishers' Crossref registrations supplied
the dates instead. For Crossref journal records, `published-print` is used when
available, otherwise the article's `published` / `published-online` date.

| Publication ID | Year-month | Source |
| --- | --- | --- |
| worby2026birefringence | 2026-09 | [arXiv: submitted 19 September 2026](https://arxiv.org/abs/2609.23080) |
| kikuchi2026interfacial | 2026-08 | [Cambridge: volume 1041, 25 August 2026](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/velocity-of-focused-liquid-jets-induced-by-impact-across-rigid-and-soft-substrates/4551960ABFAD4CBE72817C8EC3744037) |
| kawaguchi2026heleshaw | 2026-06 | [Crossref: published-print](https://api.crossref.org/works/10.1016/j.expthermflusci.2026.111773) |
| yokoyama2026flowbirefringence | 2026-04 | [arXiv: submitted 22 April 2026](https://arxiv.org/abs/2604.20678) |
| yokoyama2026naturecomm | 2026-01 | [Crossref: article published 28 January 2026](https://api.crossref.org/works/10.1038/s41467-025-67790-6) |
| kobayashi2026etfs | 2026-04 | [Crossref: published-print](https://api.crossref.org/works/10.1016/j.expthermflusci.2026.111708) |
| igarashi2025piced | 2025-04 | [arXiv: submitted 22 April 2025](https://arxiv.org/abs/2504.15952) |
| worby2024scirep | 2024-09 | [Crossref: article published 20 September 2024](https://api.crossref.org/works/10.1038/s41598-024-73087-3) |
| nakamine2024cellulose | 2024-08 | [Crossref: published-print](https://api.crossref.org/works/10.1007/s10570-024-06045-x) |
| yokoyama2024optlaseng | 2024-07 | [Crossref: published-print](https://api.crossref.org/works/10.1016/j.optlaseng.2024.108224) |
| igarashi2024pof042005 | 2024-04 | [Crossref: published-print](https://api.crossref.org/works/10.1063/5.0202757) |
| igarashi2024pof013317 | 2024-01 | [Crossref: published-print](https://api.crossref.org/works/10.1063/5.0183462) |
| mitchell2023jmps | 2023-02 | [Crossref: published-print](https://api.crossref.org/works/10.1016/j.jmps.2022.105164) |
| yokoyama2023optlaseng | 2023-02 | [Crossref: published-print](https://api.crossref.org/works/10.1016/j.optlaseng.2022.107335) |
| yokoyama2022forsciint | 2022-02 | [Crossref: published-print](https://api.crossref.org/works/10.1016/j.forsciint.2021.111138) |
| francogomez2021expfluids | 2021-02 | [Crossref: published-print](https://api.crossref.org/works/10.1007/s00348-020-03128-w) |

The Cellulose source identifies issue 12, while the existing YAML has `number:
"10"`. This change uses the source's August publication month but leaves the
existing issue number untouched; that bibliography discrepancy needs a separate
review.
