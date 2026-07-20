"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockDogs = [
  { id: 1, name: "Max", breed: "Golden Retriever", age: "3 años", status: "Al día" },
  { id: 2, name: "Luna", breed: "Bulldog Francés", age: "1 año", status: "Vacuna Pendiente" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Mis Perros</h1>
          <Button>+ Registrar Perro</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockDogs.map((dog) => (
            <Card key={dog.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{dog.name}</CardTitle>
                <p className="text-sm text-gray-500">{dog.breed}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium">{dog.age}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    dog.status === 'Al día' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {dog.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Próximas Vacunas y Consultas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Perro</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Fecha Programada</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Luna</TableCell>
                  <TableCell>Vacuna Antirrábica</TableCell>
                  <TableCell>25 Jul, 2026</TableCell>
                  <TableCell>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold bg-yellow-100 text-yellow-700">
                      Próxima semana
                    </span>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Max</TableCell>
                  <TableCell>Consulta General</TableCell>
                  <TableCell>15 Ago, 2026</TableCell>
                  <TableCell>
                    <span className="text-xs px-2 py-1 rounded-full font-semibold bg-gray-100 text-gray-700">
                      Programada
                    </span>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
