import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api/axios";
import { ReactNode, useState } from "react";

export function DialogDemo({ id }: { id: string }): ReactNode {
  const [confirmed, setConfirmed] = useState(false);
  const handleConfirm = async () => {
    const id = localStorage.getItem("id");
    console.log(id);
    const response = await api.patch(
      `user/register/${id}/${localStorage.getItem("id")}`
    );
    if (response.status === 200) {
      setConfirmed(true);
      console.log("Confirmed");
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Confirme sua presença</DialogTitle>
        <DialogDescription>
          Digite o código disponiblizado para confirmar sua presença
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right">Código</Label>
          <Input defaultValue="123456" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        {confirmed ? (
          <div className="flex gap-2">
            <p>Parabéns! Você concluiu um evento!</p>
            <Button type="submit">Sair</Button>
          </div>
        ) : (
          <Button onClick={handleConfirm}>Confirmar</Button>
        )}
      </DialogFooter>
    </DialogContent>
  );
}
