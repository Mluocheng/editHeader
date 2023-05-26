type Rule = {
    value: string
    key: string
}

type Groups = {
    rules: Rule[]
    url: string
}

type Values = {
    groups: Groups[]
}
