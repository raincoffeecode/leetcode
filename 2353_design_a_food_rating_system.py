from heapq import heapify, heappush
# TODO
class FoodRatings:

    def __init__(self, foods: list[str], cuisines: list[str], ratings: list[int]):
        num_items = len(foods)
        if num_items == 0 or num_items != len(cuisines) or num_items != len(ratings):
            raise Exception("Invalid input.")
        for i in range(num_items):
            pass
        pass        

    def changeRating(self, food: str, newRating: int) -> None:
        pass

    def highestRated(self, cuisine: str) -> str:
        pass


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)
