import { ProcessStepData } from './types';
import { performanceMetrics } from './data';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ProcessStep = ({ step, index }: { step: ProcessStepData; index: number }) => {
  const isReversed = index % 2 !== 0;
  return (
    <div className="md:grid md:grid-cols-2 md:gap-16 md:items-center">
      <div className={isReversed ? 'md:order-2 md:pl-8' : 'md:pr-8'}>
        <div className="flex items-center mb-6">
          <div className={`w-16 h-16 ${step.theme.stepBg} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>{step.step}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-lg text-gray-600 mb-6">{step.description}</p>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">{step.details.title}</h4>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">{step.details.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className={`${step.theme.timelineBg} p-4 rounded-lg`}>
            <h4 className={`font-semibold mb-2 ${step.theme.timelineTitle}`}>{step.timeline.title}</h4>
            <p className={step.theme.timelineText}>{step.timeline.description}</p>
          </div>
        </div>
      </div>
      <div className={`mt-8 md:mt-0 ${isReversed ? 'md:order-1' : ''}`}>
        <div className="bg-gray-100 p-8 rounded-lg">
          <div className="text-6xl mb-4" aria-hidden="true">{step.checklist.icon}</div>
          <h4 className="text-xl font-semibold mb-4">{step.checklist.title}</h4>
          {step.step === 3 ? (
            <div className="space-y-3">
              {performanceMetrics.map(metric => (
                <div key={metric.label}>
                  <div className="flex justify-between items-center">
                    <span>{metric.label}</span>
                    <span className={`font-semibold ${metric.textColor}`}>{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className={`${metric.color} h-2 rounded-full`} style={{ width: `${metric.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {step.checklist.items.map(item => (
                <div key={item} className="flex items-center"><CheckIcon /><span>{item}</span></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CheckIcon, ProcessStep };