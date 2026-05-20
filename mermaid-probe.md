# Mermaid XSS Probes

## P1: click directive javascript scheme
```mermaid
flowchart TD
    A[Click me] --> B[Result]
    click A "javascript:document.body.dataset.xssP1=1" "tooltip-p1"
```

## P2: HTML in node label (htmlLabels)
```mermaid
flowchart TD
    X["<img src=q onerror='document.body.dataset.xssP2=1'>P2"]
```

## P3: securityLevel loose directive
```mermaid
%%{init: {"securityLevel": "loose"}}%%
flowchart TD
    A[Y] --> B[Z]
    click A "javascript:document.body.dataset.xssP3=1"
```

## P4: KaTeX-in-mermaid trust
```mermaid
flowchart TD
    A["$$\href{javascript:document.body.dataset.xssP4=1}{Click}$$"]
```

## P5: xychart-beta newer diagram type
```mermaid
xychart-beta
    title "<img src=q onerror='document.body.dataset.xssP5=1'>chart"
    x-axis [a, b]
    y-axis "Score" 0 --> 100
    bar [50, 80]
```

## P6: sankey-beta
```mermaid
sankey-beta
"<img src=q onerror='document.body.dataset.xssP6=1'>","B",10
A,B,5
```

## P7: c4 architecture
```mermaid
C4Context
    title <img src=q onerror='document.body.dataset.xssP7=1'>
    Person(p, "User", "desc")
```

## P8: linkStyle / style with url
```mermaid
flowchart LR
    A --> B
    style A fill:url('javascript:document.body.dataset.xssP8=1'),color:red
```

## P9: gantt
```mermaid
gantt
    title <img src=q onerror='document.body.dataset.xssP9=1'>
    section A
    task1 :a1, 2020-01-01, 30d
```

## P10: requirementDiagram
```mermaid
requirementDiagram
    requirement test_req {
        id: 1
        text: "<img src=q onerror='document.body.dataset.xssP10=1'>"
        risk: high
        verifymethod: test
    }
```
