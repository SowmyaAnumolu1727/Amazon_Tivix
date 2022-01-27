Feature: Amazon Page validation

@focus
Scenario: Validating Search_ApplyingFilters_ProductDetailsPage functionalities
Given Open amazon URL
When Search for the term Shoes
Then Validate the result appeared by term shoes
Then Apply any two filters and validate the results
Then Validate details in product detail page and add product to cart

