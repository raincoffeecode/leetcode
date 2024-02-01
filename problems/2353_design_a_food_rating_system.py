from heapq import heappop, heappush


class FoodRatings:
    # A master list of food and its ratings.
    food_ratings: dict[str, int]

    # A mapping of cuisine names to its respective min heaps. The scores are inverted so
    # that the highest score foods can be retrieved first from Python's min heap.
    cuisine_ratings: dict[str, list]

    # A lookup table of foods to their respective cuisines.
    food_cuisines: dict[str:str]

    def __init__(self, foods: list[str], cuisines: list[str], ratings: list[int]):
        num_items = len(foods)
        if num_items == 0 or num_items != len(cuisines) or num_items != len(ratings):
            raise Exception("Invalid input.")

        self.food_ratings = {}
        self.cuisine_ratings = {}
        self.food_cuisines = {}

        for i in range(num_items):
            food = foods[i]
            rating = ratings[i]
            cuisine = cuisines[i]

            # Create new entry for cuisine if first time seeing.
            if cuisine not in self.cuisine_ratings:
                self.cuisine_ratings[cuisine] = []

            heappush(self.cuisine_ratings[cuisine], (-rating, food))

            # Keep a master list of food to its ratings.
            self.food_ratings[food] = rating

            self.food_cuisines[food] = cuisine

    def changeRating(self, food: str, newRating: int) -> None:
        cuisine = self.food_cuisines[food]
        heappush(self.cuisine_ratings[cuisine], (-newRating, food))
        self.food_ratings[food] = newRating

    def highestRated(self, cuisine: str) -> str:
        cusine_ratings = self.cuisine_ratings[cuisine]
        while cusine_ratings:
            [rating, food] = cusine_ratings[0]
            outdated_rating = -rating != self.food_ratings[food]
            if outdated_rating:
                heappop(cusine_ratings)
            else:
                return food
        raise Exception("Unexpected error.")


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)
