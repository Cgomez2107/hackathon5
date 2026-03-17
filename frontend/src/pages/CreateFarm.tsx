import { StepHeader } from "../components/mobile/StepHeader";
import { StepProgressBar } from "../components/mobile/Stepprogressbar";
import { PhotoUploadGrid } from "../components/mobile/Photouploadgrid";
import { AIInsightNote } from "../components/mobile/Aiinsightnote";
import { KnowledgeBasePreview } from "../components/mobile/Knowledgebasepreview";

const knowledgeFields = [
  { label: "Name", value: "Finca La Esperanza" },
  { label: "Location", value: "Antioquia, Colombia" },
  { label: "Prices" },
  { label: "Coffee Story" },
  { label: "Today's Birds" },
  { label: "Availability" },
];

const initialPhotos = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLnYiC3s3Qh6s7zCayU4oEAhVTUX0q3u4h1PdMJNvMyPqtxiwj3iiELkt-TP6QNlw8_OohfIEYzmos98mFJh6b0OHlLc26PRLQEmbMKwQGlobzlV5vnUXMSMnA5Ou4M5uxH_i1nYDpz_E8dJpTrjW1ycSepJZp8RBFabHSicZp3uI9Mnc6eA-IOebeSmwi6i6sT18B5amDhjXjrDrW0M-1CwaLdhOAcxtA5DiNAfLoj1SEmD9HJCcec2yNoNwwZ1kjtyuFdFvJzMAq",
    alt: "Lush green coffee farm on a hillside",
  },
];

const CreateFarm = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-background-light dark:bg-background-dark shadow-lg md:shadow-none font-display text-primary/90">
      <StepHeader
        title="Set up your farm on Cumanday"
        onBack={() => window.history.back()}
      />

      <StepProgressBar current={3} total={7} stepLabel="Photos" />

      <main className="flex-1 px-6 md:px-8 lg:px-12 py-4 md:py-6">
        <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 md:mb-4">
          Send us 3 photos of your farm
        </h2>
        <p className="text-primary/70 text-lg md:text-xl mb-8 md:mb-12">
          Any photo from your phone works — we'll handle the rest
        </p>

        <PhotoUploadGrid slots={3} initialPhotos={initialPhotos} />

        <AIInsightNote
          message={
            <>
              <strong>AI Note:</strong> Cumanday will automatically generate
              descriptions in English, French and German from your photos.
            </>
          }
        />

        <button className="w-full bg-primary text-background-light py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform hover:bg-primary/90">
          Next step
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </main>

      <KnowledgeBasePreview completionPercent={30} fields={knowledgeFields} />
    </div>
  );
};

export default CreateFarm;
