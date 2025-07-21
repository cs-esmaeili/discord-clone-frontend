'use client'
import { Button } from "@/components/ui/button"
import { redirect } from 'next/navigation';

export default function LogInForm() {
  return (
      <div className="flex gap-2">
        <Button onClick={() => {
          redirect('http://localhost:3000/auth/google');
          // window.location.href = "";
        }}>GOOGLE</Button>

        <Button onClick={() => { redirect('/clientside'); }}>client Side</Button>
        <Button onClick={() => { redirect('/clientsideHoc'); }}>client Hoc</Button>
        <Button onClick={() => { redirect('/serverside'); }}>server side</Button>
        <Button onClick={() => { redirect('/middlewareSide'); }}>middlewareSide</Button>
      </div>
  );
}
