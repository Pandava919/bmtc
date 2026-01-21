import { connectDB } from "@/lib/db";
import { GET } from "./route";

it('DB Connected successfully', async() => {
  const res = await connectDB()

  expect(res).toBe(true);
});

it('needs to return 200', async() => {
  const response = await GET(undefined, { params: { id: '68e8e73295fb6e49a97d08e8' } });

  expect(response.status).toBe(200);
});

it('needs to return 400', async() => {
  const response = await GET(undefined, { params: { id: '' } });

  expect(response.status).toBe(400);
});

it('needs to return 404', async() => {
  const response = await GET(undefined, { params: { id: '68ee3bebcf6454c8084bd22e' } });

  expect(response.status).toBe(404);
});