const prisma = require("../prisma");
const seed = async () => {
    // TODO: Create Customers, Restaurants and Reservations
    const createCustomers = async () => {
        const customers = [
            { name: "Harper" },
            { name: "Milo" },
            { name: "Aria" },
            { name: "Jaxon" },
            { name: "Nova" },
            { name: "Theo" },
            { name: "Willow" },
            { name: "Finn" },
            { name: "Ivy" },
            { name: "Zane" },
        ];
        await prisma.customer.createMany({ data: customers });
    };

    const createRestaurants = async () => {
        const restaurants = [
            { name: "Chipotle" },
            { name: "McDonald's" },
            { name: "Starbucks" },
            { name: "Subway" },
            { name: "Pizza Hut" },
            { name: "Taco Bell" },
            { name: "Chick-fil-A" },
            { name: "Dunkin'" },
            { name: "KFC" },
            { name: "Wendy's" },
        ];
        await prisma.restaurant.createMany({ data: restaurants });
    };

    const createReservations = async () => {
        const reservations = [
            {
                customerId: 1,
                restaurantId: 1,
                date: new Date("2024-07-01"),
                partyCount: 4,
            },
            {
                customerId: 2,
                restaurantId: 2,
                date: new Date("2024-07-02"),
                partyCount: 2,
            },
            {
                customerId: 3,
                restaurantId: 3,
                date: new Date("2024-07-03"),
                partyCount: 6,
            },
        ];
        await prisma.reservation.createMany({ data: reservations });
    };

    await createCustomers();
    await createRestaurants();
    await createReservations();
};

seed()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });