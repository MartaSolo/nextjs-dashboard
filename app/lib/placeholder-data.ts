// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const customers = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    email: "lee@robinson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Michael Novotny",
    email: "michael@novotny.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Amy Burns",
    email: "amy@burns.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
    name: "Balazs Orban",
    email: "balazs@orban.com",
    image_url: "/customers/balazs-orban.png",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Sophia Chen",
    email: "sophia@chen.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "James Wilson",
    email: "james@wilson.com",
    image_url: "/customers/lee-robinson.png",
  },
  {
    id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    name: "Maria Garcia",
    email: "maria@garcia.com",
    image_url: "/customers/amy-burns.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "David Kim",
    email: "david@kim.com",
    image_url: "/customers/michael-novotny.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Emma Thompson",
    email: "emma@thompson.com",
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Carlos Mendez",
    email: "carlos@mendez.com",
    image_url: "/customers/balazs-orban.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    name: "Nina Patel",
    email: "nina@patel.com",
    image_url: "/customers/delba-de-oliveira.png",
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    name: "Oliver Hughes",
    email: "oliver@hughes.com",
    image_url: "/customers/lee-robinson.png",
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: "paid",
    date: "2022-10-29",
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: "paid",
    date: "2023-09-10",
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: "pending",
    date: "2023-08-05",
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: "pending",
    date: "2023-07-16",
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: "pending",
    date: "2023-06-27",
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: "paid",
    date: "2023-06-09",
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: "paid",
    date: "2023-06-17",
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: "paid",
    date: "2023-06-07",
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: "paid",
    date: "2023-08-19",
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: "paid",
    date: "2023-06-03",
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: "paid",
    date: "2022-06-05",
  },
  // Sophia Chen
  {
    customer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    amount: 12450,
    status: "paid",
    date: "2024-01-15",
  },
  {
    customer_id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    amount: 8750,
    status: "pending",
    date: "2024-03-22",
  },
  // James Wilson
  {
    customer_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    amount: 19200,
    status: "paid",
    date: "2023-11-08",
  },
  {
    customer_id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    amount: 5600,
    status: "pending",
    date: "2024-02-14",
  },
  // Maria Garcia
  {
    customer_id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    amount: 22100,
    status: "paid",
    date: "2024-04-01",
  },
  {
    customer_id: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    amount: 3400,
    status: "paid",
    date: "2023-12-19",
  },
  // David Kim
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440001",
    amount: 15800,
    status: "pending",
    date: "2024-05-10",
  },
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440001",
    amount: 9900,
    status: "paid",
    date: "2023-10-03",
  },
  // Emma Thompson
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440002",
    amount: 6750,
    status: "paid",
    date: "2024-01-28",
  },
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440002",
    amount: 14300,
    status: "pending",
    date: "2024-06-05",
  },
  // Carlos Mendez
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440003",
    amount: 28900,
    status: "paid",
    date: "2023-09-17",
  },
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440003",
    amount: 4200,
    status: "pending",
    date: "2024-03-08",
  },
  // Nina Patel
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440004",
    amount: 11200,
    status: "paid",
    date: "2024-02-25",
  },
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440004",
    amount: 7800,
    status: "paid",
    date: "2023-08-30",
  },
  // Oliver Hughes
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440005",
    amount: 17650,
    status: "pending",
    date: "2024-04-18",
  },
  {
    customer_id: "550e8400-e29b-41d4-a716-446655440005",
    amount: 950,
    status: "paid",
    date: "2023-07-12",
  },
];

const revenue = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

export { users, customers, invoices, revenue };
