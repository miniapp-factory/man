"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function SavingsProgram() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);

  const addToSavings = () => {
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      setTotal((prev) => prev + value);
      setAmount("");
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <h2 className="text-xl font-semibold">Savings Program</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Label htmlFor="amount">Amount to Save</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={addToSavings} className="w-full">
            Add to Savings
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-medium">
          Total Saved: ${total.toFixed(2)}
        </p>
      </CardFooter>
    </Card>
  );
}
