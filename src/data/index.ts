const data = Array.from({ length: 21 }, (_, i) => ({
  title: "Recipe " + (i + 1),
  image:
    "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixid=MnwxMDkyNjJ8MHwxfHNlYXJjaHw1NHx8Zm9vZHxlbnwwfHx8fDE2NTUzMDU2MjY&ixlib=rb-1.2.1&w=500&h=700",
  isLiked: i % 2 === 0,
}));

export { data };
