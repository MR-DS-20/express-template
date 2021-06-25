import { Document } from "mongoose";

/**
 * Interfaces for a nested documents within the main schema
 */
interface NestedBase {
    name: string;
}
interface Nested extends NestedBase {
    _id: string;
}
interface NestedDoc extends NestedBase, Document { }
/*
 * Interface with all the document fields, excluding the _id field so it can be extended for multiple uses
 */
interface ExampleBase<S> {
    title: string;
    date_created: number;
    date_modified: number;
    order: number;
    hide: boolean;
    details: S; // Generic type used for subdoc/nested field
}
/*
 * Provides type for Docs returned from queries so operations like `set()` or `save()` can be performed
 */

export interface ExampleDoc extends ExampleBase<NestedDoc>, Document {
}
/*
 * Used as a type for docs sent to API such as on updates or creation
 */

export interface Example extends ExampleBase<Nested> {
    _id: string;
}
