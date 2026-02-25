import Link from "next/link";
import { comparisonFeatures, engagementModels } from "./data";
import { EngagementModel, ProcessStepData } from "./types";

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
    ? 'bg-blue-50 border-2 border-blue-300 rounded-lg p-8 relative flex flex-col h-full'
    : `bg-white border-2 border-gray-200 rounded-lg p-8 ${currentTheme.border} transition-colors flex flex-col h-full`;

  return (
    <div className={containerClasses}>
      {model.highlighted && (
        <div className="absolute top-4 right-4 bg-[#0055ae] text-white px-3 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <div className="text-6xl mb-4" aria-hidden="true">{model.icon}</div>
        <h3 className="text-2xl font-bold mb-2">{model.title}</h3>
        <p className="text-gray-600">{model.description}</p>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        <div className={`${model.highlighted ? currentTheme.highlightedBestForBg : currentTheme.bestForBg} p-4 rounded-lg`}>
          <h4 className={`font-semibold mb-2 ${currentTheme.bestForTitle}`}>Best For:</h4>
          <ul className={`${currentTheme.bestForText} space-y-1 list-disc list-inside`}>
            {model.bestFor.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className={`${model.highlighted ? 'bg-white' : 'bg-gray-50'} p-4 rounded-lg`}>
          <h4 className="font-semibold mb-2">What's Included:</h4>
          <ul className="text-gray-700 space-y-1 list-disc list-inside">
            {model.included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className={`${model.highlighted ? 'bg-green-100' : 'bg-green-50'} p-4 rounded-lg`}>
          <h4 className="font-semibold mb-2 text-green-800">Commitment:</h4>
          <p className="text-green-700">{model.commitment}</p>
        </div>
      </div>

      <div className="text-center border-t border-gray-200 pt-6 mt-auto">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Starting At</p>
        <div className={`text-4xl font-bold ${currentTheme.price} mb-2`}>{model.price}</div>
        <p className="text-sm text-gray-600 mb-6">{model.priceSub}</p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl text-left mb-6 p-4">
          <h4 className="font-semibold text-sm text-gray-800 mb-3">Pricing Breakdown</h4>
          <div className="text-sm text-gray-700 space-y-3">
            <div className="flex justify-between items-start">
              <span className="font-medium text-gray-900">Subscription:</span>
              <span className="text-right text-gray-600">{model.pricing?.subscription ?? '—'}</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="font-medium text-gray-900">Setup / One-time:</span>
              <span className="text-right text-gray-600">{model.pricing?.setupFee ?? '—'}</span>
            </div>
            {model.pricing?.customOptions && (
              <div className="pt-2 border-t border-gray-200 mt-2">
                <div className="font-medium text-gray-900 mb-1">Custom options:</div>
                <ul className="list-disc list-inside text-gray-600 pl-1 space-y-1">
                  {model.pricing.customOptions.map((opt) => <li key={opt}>{opt}</li>)}
                </ul>
              </div>
            )}
            {model.pricing?.notes && (
              <div className="pt-2 border-t border-gray-200 mt-2 text-xs text-gray-500 italic">
                {model.pricing.notes}
              </div>
            )}
          </div>
        </div>
        <Link
          href="#companies-form"
          className={`${currentTheme.button} text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg inline-block w-full`}
        >
          {model.buttonText}
        </Link>
      </div>
    </div>
  );
};

export const ModelsSection = () => (
    <section className="py-14 bg-white" id="models">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Three Ways to Invest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual SDRs to full regional teams, we have a model that fits your scale and objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {engagementModels.map((model) => <ModelCard key={model.title} model={model} />)}
          </div>

          {/* Model Comparison Table */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Model Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Dedicated SDR</th>
                    <th className="text-center py-4 px-4 font-semibold">Outsourced Team</th>
                    <th className="text-center py-4 px-4 font-semibold">Regional Pods</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={row.feature} className={index < comparisonFeatures.length - 1 ? "border-b border-gray-200" : ""}>
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      {row.values.map((value) => <td key={value} className="text-center py-4 px-4 text-sm">{value}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </section>
);

export const ProcessStep = ({ step, index }: { step: ProcessStepData; index: number }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline Content */}
      <div className={index % 2 === 1 ? 'md:order-2' : ''}>
        <div className="md:text-right md:pr-12">
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4 ${step.theme.stepBg}`}>
            Step {step.step}
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
          <p className="text-xl text-gray-600 mb-8">{step.description}</p>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-3">{step.details.title}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {step.details.items.map((item, i) => (
                  <li key={i} className="flex items-start md:justify-end">
                    <span className="text-[#0055ae] mr-2 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-4 rounded-lg ${step.theme.timelineBg}`}>
              <p className={`font-bold ${step.theme.timelineTitle}`}>{step.timeline.title}</p>
              <p className={`text-sm ${step.theme.timelineText}`}>{step.timeline.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Visual */}
      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
        <div className="relative">
          {/* Timeline Node */}
          <div className="absolute left-6 md:left-auto md:right-6 top-0 w-12 h-12 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center font-bold text-gray-900 z-10 hidden md:flex">
            {step.step}
          </div>

          {/* Checklist Card */}
          <div className={`p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all ${step.theme.timelineBg}`}>
            <div className="text-4xl mb-4">{step.checklist.icon}</div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">{step.checklist.title}</h4>
            <ul className="space-y-3">
              {step.checklist.items.length > 0 ? (
                step.checklist.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-sm">
                    <span className="text-[#0055ae] mr-2 font-bold">•</span>
                    {item}
                  </li>
                ))
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-[#0055ae] mr-2 font-bold">•</span>
                    <div className="flex-1 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">Exceeding Pipeline Targets</p>
                  <div className="flex items-center">
                    <span className="text-[#0055ae] mr-2 font-bold">•</span>
                    <div className="flex-1 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">Quality Meetings Booked</p>
                  <div className="flex items-center">
                    <span className="text-[#0055ae] mr-2 font-bold">•</span>
                    <div className="flex-1 h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">Client Satisfaction</p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};