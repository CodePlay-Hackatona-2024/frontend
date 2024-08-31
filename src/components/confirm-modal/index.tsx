import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api/axios";
import { ReactNode, useState } from "react";

export function DialogDemo({ id }: { id: string }): ReactNode {
  const [confirmed, setConfirmed] = useState(false);
  const [password, setPassword] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirm = async () => {
    const user_id = localStorage.getItem("id");

    const response = await api.patch("user/confirm-presence", {
      user_id: user_id,
      event_id: id,
      confirmation_code: password,
    });
    if (response.status === 200) {
      setConfirmed(true);
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
          <Input
            defaultValue="123456"
            className="col-span-3"
            onChange={(e) => handleInput(e)}
          />
        </div>
      </div>
      <DialogFooter>
        {confirmed ? (
          <div className="flex gap-2 justify-center items-center">
            <p>Parabéns! Você concluiu um evento!</p>
          </div>
        ) : (
          <Button
            onClick={handleConfirm}
            className="bg-primary hover:bg-primary/90 text-white font-bold rounded"
          >
            Confirmar
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  );
}
