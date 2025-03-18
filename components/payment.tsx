"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("card");

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow h-[450px]">
      <div className="flex flex-col space-y-1.5 p-2">
        <h2 className="font-semibold leading-none tracking-tight">
          Méthode de paiement
        </h2>
        <p className="text-sm text-muted-foreground">
          Ajouter un nouveau moyen de paiement.
        </p>
      </div>

      {/* Sélection du mode de paiement */}
      <div className="p-2 pt-0 grid gap-2">
        <div role="radiogroup" className="grid grid-cols-3 gap-2">
          {["card", "paypal", "apple"].map((method) => (
            <div key={method}>
              <Input
                type="radio"
                id={method}
                name="payment-method"
                value={method}
                className="peer hidden"
                checked={selectedMethod === method}
                onChange={() => setSelectedMethod(method)}
              />
              <label
                htmlFor={method}
                className={`text-sm font-medium flex flex-col items-center justify-between rounded-md border-2 bg-transparent p-1 hover:bg-gray-100 hover:text-accent-foreground ${
                  selectedMethod === method ? "border-primary" : "border-muted"
                }`}
              >
                {method === "card" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mb-3 h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <path d="M2 10h20"></path>
                  </svg>
                )}
                {method === "paypal" && (
                  <svg role="img" viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                    <path
                      d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
                {method === "apple" && (
                  <svg role="img" viewBox="0 0 24 24" className="mb-3 h-6 w-6">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </label>
            </div>
          ))}
        </div>

        {/* Formulaire de paiement */}
        <div className="grid gap-0">
          <label htmlFor="name" className="text-sm font-medium">
            Nom
          </label>
          <Input
            id="name"
            placeholder="Prénom Nom"
            className="input-field"
          />
        </div>

        <div className="grid gap-0">
          <label htmlFor="city" className="text-sm font-medium">
            Ville
          </label>
          <Input id="city" placeholder="" className="input-field" />
        </div>

        <div className="grid gap-0">
          <label htmlFor="number" className="text-sm font-medium">
            Numéro de carte
          </label>
          <Input id="number" placeholder="**** **** **** ****" className="input-field" />
        </div>

        {/* Date d'expiration & CVC */}
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-0">
            <label htmlFor="month" className="text-sm font-medium">
              Mois
            </label>
            <Input id="month" placeholder="MM" className="input-field" />
          </div>

          <div className="grid gap-0">
            <label htmlFor="year" className="text-sm font-medium">
              Année
            </label>
            <Input id="year" placeholder="YYYY" className="input-field" />
          </div>

          <div className="grid gap-0">
            <label htmlFor="cvc" className="text-sm font-medium">
              CVC
            </label>
            <Input id="cvc" placeholder="CVC" className="input-field" />
          </div>
        </div>
      </div>

      {/* Bouton de validation */}
      <div className="flex items-center p-2 pt-0">
        <Button className="bg-black text-white hover:bg-black/70 w-full">Continuer</Button>
      </div>
    </div>
  );
};

export default Payment;
