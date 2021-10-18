export interface ErrorProps {
    inError?: boolean;
    errorMessage?: string;
    errorType?: "danger" | "warning";
}

export interface TagItem {id: string; name: string;}
