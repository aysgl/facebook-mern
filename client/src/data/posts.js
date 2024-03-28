const postsData = [
    {
        id: 1,
        userId: 1,
        username: "John Smith",
        userImg: "https://picsum.photos/60/60?random=1",
        description: "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        commented: 16,
        shared: 26,
        emotions: "liked",
        postImg: "https://picsum.photos/600/600?random=2"
    }, {
        id: 2,
        userId: 1,
        username: "John Smith",
        userImg: "https://picsum.photos/60/60?random=1",
        description: "Est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores",
        commented: 16,
        shared: 26,
        emotions: "sadly",
        postImg: "https://picsum.photos/600/600?random=3"
    }, {
        id: 3,
        userId: 1,
        username: "John Smith",
        userImg: "https://picsum.photos/60/60?random=1",
        description: "Sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus",
        commented: 16,
        shared: 26,
        emotions: "angry",
        postImg: "https://picsum.photos/600/600?random=4"
    }, {
        id: 4,
        userId: 1,
        username: "John Smith",
        userImg: "https://picsum.photos/60/60?random=1",
        description: "Ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        commented: 16,
        shared: 26,
        emotions: "haha",
        postImg: "https://picsum.photos/600/600?random=5"
    }, {
        id: 5,
        userId: 1,
        username: "John Smith",
        userImg: "https://picsum.photos/60/60?random=1",
        description: "Epudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed.",
        commented: 16,
        shared: 26,
        emotions: "lovely",
        postImg: "https://picsum.photos/600/600?random=6"
    }, {
        id: 6,
        userId: 1,
        username: "John Smith",
        userImg: "https://picsum.photos/60/60?random=1",
        description: "Ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        commented: 16,
        shared: 26,
        emotions: "lovely",
        postImg: "https://picsum.photos/600/600?random=7"
    }, {
        id: 7,
        userId: 2,
        username: "Daniel Miller",
        userImg: "https://picsum.photos/60/60?random=8",
        description: "Dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
        commented: 16,
        shared: 26,
        emotions: "haha",
        postImg: "https://picsum.photos/600/600?random=9"
    }, {
        id: 8,
        userId: 2,
        username: "Daniel Miller",
        userImg: "https://picsum.photos/60/60?random=8",
        description: "Dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
        commented: 16,
        shared: 26,
        emotions: "lovely",
        postImg: "https://picsum.photos/600/600?random=10"
    }, {
        id: 9,
        userId: 3,
        username: "Alice Johnson",
        userImg: "https://picsum.photos/60/60?random=11",
        description: "Consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        commented: 16,
        shared: 26,
        emotions: "heart",
        postImg: "https://picsum.photos/600/600?random=12"
    }, {
        id: 10,
        userId: 4,
        username: "Bob Williams",
        userImg: "https://picsum.photos/60/60?random=13",
        description: "Quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
        commented: 16,
        shared: 26,
        emotions: "lovely",
        postImg: "https://picsum.photos/600/600?random=14"
    }, {
        id: 11,
        userId: 5,
        username: "Eva Jones",
        userImg: "https://picsum.photos/60/60?random=15",
        description: "Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
        commented: 16,
        shared: 26,
        emotions: "lovely",
        postImg: "https://picsum.photos/600/600?random=16"
    }, {
        id: 12,
        userId: 6,
        username: "Micheal Brown",
        userImg: "https://picsum.photos/60/60?random=17",
        description: "Itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
        commented: 16,
        shared: 26,
        emotions: "heart",
        postImg: "https://picsum.photos/600/600?random=18"
    }, {
        id: 13,
        userId: 7,
        username: "Sophia Davis",
        userImg: "https://picsum.photos/60/60?random=19",
        description: "Aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
        commented: 16,
        shared: 26,
        emotions: "lovely",
        postImg: "https://picsum.photos/600/600?random=20"
    }, {
        id: 14,
        userId: 8,
        username: "Olivia Wilson",
        userImg: "https://picsum.photos/60/60?random=21",
        description: "Fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
        commented: 16,
        shared: 26,
        emotions: "heart",
        postImg: "https://picsum.photos/600/600?random=22"
    }, {
        id: 15,
        userId: 8,
        username: "Olivia Wilson",
        userImg: "https://picsum.photos/60/60?random=21",
        description: "Reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
        commented: 16,
        shared: 26,
        emotions: "surprise",
        postImg: "https://picsum.photos/600/600?random=23"
    },
]

export default postsData