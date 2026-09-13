"use client";

// RecognitionResult
//
// Mostra, in modo semplice, cosa ha capito l'AI dalle foto:
//   - i campi che è riuscita a riconoscere con buona sicurezza (spunta verde)
//   - i campi che NON è riuscita a capire bene, segnati con un punto
//     interrogativo, che dovrai confermare tu
//   - gli accessori che ha visto nelle foto

interface AiFieldResult<T> {
  value: T | null;
  confidence: number;
  needsConfirmation: boolean;
}

interface RecognitionResultProps {
  result: {
    category: AiFieldResult<string>;
    brand: AiFieldResult<string>;
    model: AiFieldResult<string>;
    color: AiFieldResult<string>;
    cosmeticCondition: AiFieldResult<string>;
    accessoriesDetected: string[];
    overallConfidence: number;
  };
}

function FieldRow({ label, field }: { label: string; field: AiFieldResult<string> }) {
  const percent = Math.round(field.confidence * 100);
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-medium flex items-center gap-2">
        {field.needsConfirmation ? (
          <span className="text-amber-600">? da confermare</span>
        ) : (
          <>
            {field.value}
            <span className="text-xs text-gray-400">{percent}%</span>
          </>
        )}
      </span>
    </div>
  );
}

export function RecognitionResult({ result }: RecognitionResultProps) {
  const overallPercent = Math.round(result.overallConfidence * 100);

  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <p className="text-base font-semibold mb-1">Prodotto riconosciuto</p>
      <p className="text-sm text-gray-500 mb-3">Confidenza complessiva: {overallPercent}%</p>

      <FieldRow label="Categoria" field={result.category} />
      <FieldRow label="Marca" field={result.brand} />
      <FieldRow label="Colore" field={result.color} />
      <FieldRow label="Condizione" field={result.cosmeticCondition} />

      {result.accessoriesDetected.length > 0 && (
        <div className="mt-3">
          <p className="text-sm text-gray-600 mb-1">Accessori rilevati</p>
          <ul className="text-sm">
            {result.accessoriesDetected.map((a) => (
              <li key={a}>✓ {a}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
