import Link from "next/link";
import { comparisonFeatures, engagementModels } from "./data";
import { EngagementModel, ProcessStepData } from "./types";

export const ComparisonTableSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Pricing Comparison
      </h2>
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="p-6 font-bold text-slate-500 uppercase text-xs">Core Capabilities</th>
              <th className="p-6 font-bold text-center text-slate-500 uppercase text-xs">Dedicated Hire</th>
              <th className="p-6 font-bold text-center text-slate-500 uppercase text-xs">Outsourced Team</th>
              <th className="p-6 font-bold text-center text-slate-500 uppercase text-xs">Regional Pods</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {comparisonFeatures.map((row) => (
              <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-6 font-semibold text-gray-700">{row.feature}</td>
                {row.values.map((value, i) => (
                  <td key={i} className="py-4 text-center text-sm text-gray-600">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const ModelCard = ({ model }: { model: EngagementModel }) => {
  const themeClasses = {
    blue: {
      border: 'hover:border-blue-300',
      price: 'text-[#0055ae]',
      button: 'bg-[#0055ae] hover:bg-blue-700',
      bestForBg: 'bg-blue-50',
      bestForTitle: 'text-blue-800',
      bestForText: 'text-blue-700',
      highlightedBestForBg: 'bg-blue-100',
    },
    purple: {
      border: 'hover:border-purple-300',
      price: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      bestForBg: 'bg-purple-50',
      bestForTitle: 'text-purple-800',
      bestForText: 'text-purple-700',
      highlightedBestForBg: 'bg-purple-100',
    },
  };

  const currentTheme = themeClasses[model.theme];

  const containerClasses = model.highlighted
    ? 'bg-blue-50 border-2 border-blue-300 rounded-lg p-6 sm:p-8 relative flex flex-col h-full shadow-lg'
    : `bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 ${currentTheme.border} transition-all flex flex-col h-full hover:shadow-md`;

  return (
    <div className={containerClasses}>
      {model.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0055ae] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <div className="text-5xl mb-4" aria-hidden="true">{model.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
        <p className="text-gray-600 text-sm">{model.description}</p>
      </div>

      <div className="space-y-4 mb-4 flex-grow">
        <div className={`${model.highlighted ? currentTheme.highlightedBestForBg : currentTheme.bestForBg} p-4 rounded-lg`}>
          <h4 className={`font-semibold mb-2 text-sm ${currentTheme.bestForTitle}`}>Best For:</h4>
          <ul className={`${currentTheme.bestForText} text-sm space-y-1 list-disc list-inside`}>
            {model.bestFor.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className={`${model.highlighted ? 'bg-white' : 'bg-gray-50'} p-4 rounded-lg border border-gray-100`}>
          <h4 className="font-semibold mb-2 text-sm">Included:</h4>
          <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
            {model.included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h4 className="font-semibold mb-1 text-sm text-green-800">Commitment:</h4>
          <p className="text-sm text-green-700 leading-relaxed">{model.commitment}</p>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="text-center mb-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Starting At</p>
          <div className={`text-3xl font-bold ${currentTheme.price}`}>{model.price}</div>
          <p className="text-xs text-gray-500 mt-1">{model.priceSub}</p>
        </div>

        <Link
          href="#companies-form"
          className={`${currentTheme.button} text-white px-6 py-4 rounded-xl font-bold transition-all text-center block w-full`}
        >
          {model.buttonText}
        </Link>
      </div>
    </div>
  );
};

export const ModelsSection = () => (
  <section className="py-20 bg-gray-50/50" id="models">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Flexible Pricing Models</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          From individual SDRs to specialized regional pods, we provide the talent and infrastructure to scale your pipeline.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {engagementModels.map((model) => <ModelCard key={model.title} model={model} />)}
      </div>
    </div>
  </section>
);

export const ProcessStep = ({ step }: { step: ProcessStepData }) => {
  const icons = ['🔍', '🤝', '📈', '🚀'];
  return (
    <div className="relative group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="absolute -top-4 -right-2 text-6xl font-black text-gray-50 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
        0{step.step}
      </div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl ${step.theme.stepBg} flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
          {icons[step.step - 1]}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0055ae] transition-colors">{step.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};