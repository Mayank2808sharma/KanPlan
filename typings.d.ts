interface Board{
    columns: Map<TypedColumn,Column>
}

type TypedColumn = "todo" | "inprogress" | "done"
