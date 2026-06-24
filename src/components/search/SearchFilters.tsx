import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface SearchFiltersProps {
  serviceTypes: string[];
  setServiceTypes: (v: string[]) => void;
  priceRange: number[];
  setPriceRange: (v: number[]) => void;
  petSizes: string[];
  setPetSizes: (v: string[]) => void;
  features: string[];
  setFeatures: (v: string[]) => void;
}

const SERVICE_OPTIONS = ["Hospedagem", "Passeio", "Creche", "Cuidado na Sua Casa", "Visitas"];
const PET_SIZE_OPTIONS = ["Pequeno", "Médio", "Grande"];
const FEATURE_OPTIONS = ["Quintal cercado", "Sem outros pets", "Aceita gatos", "Administra medicação", "Tem cães residentes", "Pets exóticos"];

const toggle = (arr: string[], val: string) =>
  arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

const SearchFilters = ({
  serviceTypes, setServiceTypes,
  priceRange, setPriceRange,
  petSizes, setPetSizes,
  features, setFeatures,
}: SearchFiltersProps) => (
  <div className="space-y-6">
    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Tipo de Serviço</h3>
      <div className="space-y-2.5">
        {SERVICE_OPTIONS.map((s) => (
          <div key={s} className="flex items-center gap-2">
            <Checkbox
              id={`service-${s}`}
              checked={serviceTypes.includes(s)}
              onCheckedChange={() => setServiceTypes(toggle(serviceTypes, s))}
            />
            <Label htmlFor={`service-${s}`} className="text-sm text-foreground cursor-pointer">{s}</Label>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Faixa de Preço</h3>
      <Slider
        min={75}
        max={500}
        step={25}
        value={priceRange}
        onValueChange={setPriceRange}
        className="my-4"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>R$ {priceRange[0]}</span>
        <span>R$ {priceRange[1]}</span>
      </div>
    </div>

    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Porte do Pet</h3>
      <div className="flex gap-2">
        {PET_SIZE_OPTIONS.map((size) => (
          <button
            key={size}
            onClick={() => setPetSizes(toggle(petSizes, size))}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              petSizes.includes(size)
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Características do Cuidador</h3>
      <div className="space-y-2.5">
        {FEATURE_OPTIONS.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <Checkbox
              id={`feature-${f}`}
              checked={features.includes(f)}
              onCheckedChange={() => setFeatures(toggle(features, f))}
            />
            <Label htmlFor={`feature-${f}`} className="text-sm text-foreground cursor-pointer">{f}</Label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SearchFilters;
