type Rule = {
    value: string
    key: string
    type: "add" | "del" 
}

type Groups = {
    rules: Rule[]
    url: string
}

type Values = {
    groups: Groups[]
}
