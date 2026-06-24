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

const SERVICE_OPTIONS = ["Boarding", "Walking", "Day Care", "House Sitting", "Drop-Ins"];
const PET_SIZE_OPTIONS = ["Small", "Medium", "Large"];
const FEATURE_OPTIONS = ["Fenced yard", "No other pets", "Accepts cats", "Medication admin", "Has resident dogs", "Exotic pets"];

const toggle = (arr: string[], val: string) =>
  arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val];

const SearchFilters = ({
  serviceTypes, setServiceTypes,
  priceRange, setPriceRange,
  petSizes, setPetSizes,
  features, setFeatures,
}: SearchFiltersProps) => (
  <div className="space-y-6">
    {/* Service Type */}
    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Service Type</h3>
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

    {/* Price Range */}
    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Price Range</h3>
      <Slider
        min={15}
        max={100}
        step={5}
        value={priceRange}
        onValueChange={setPriceRange}
        className="my-4"
      />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>

    {/* Pet Size */}
    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Pet Size</h3>
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

    {/* Features */}
    <div>
      <h3 className="font-display font-semibold text-foreground mb-3">Provider Features</h3>
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
