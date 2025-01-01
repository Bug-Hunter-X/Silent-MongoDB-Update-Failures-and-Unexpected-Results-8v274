# Silent MongoDB Update Failures and Unexpected Results
This repository demonstrates common errors in MongoDB update operations that can lead to silent failures or unexpected results.  The code showcases incorrect usage of `updateOne` and how to fix these issues for reliable updates.

## Issues Addressed:

* **Missing `upsert` option:** The `updateOne` method requires an `upsert` option when you want to insert a new document if the filter doesn't match any existing document. Without this, the update fails silently if no document matches the filter.
* **Incorrect use of `$inc` operator:** The `$inc` operator is used to increment numeric fields.  Attempting to increment non-numeric fields will lead to an error.

## Solutions:

The solution code demonstrates the correct usage of `updateOne` with the `upsert` option and the appropriate use of `$inc` for numerical fields only.
