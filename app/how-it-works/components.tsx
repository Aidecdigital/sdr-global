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
          <div className={`w-16 h-16 ${step.theme.stepBg} rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg`}>{step.step}</div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
        </div>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">{step.description}</p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">{step.details.title}</h4>
            <ul className="space-y-3 text-gray-600 list-none">
                {step.details.items.map(item => (
                    <li key={item} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 shrink-0"></span>
                        {item}
                    </li>
                ))}
            </ul>
          </div>
          <div className={`${step.theme.timelineBg} p-6 rounded-2xl border border-blue-100/50`}>
            <h4 className={`font-bold mb-2 ${step.theme.timelineTitle}`}>{step.timeline.title}</h4>
            <p className={step.theme.timelineText}>{step.timeline.description}</p>
          </div>
        </div>
      </div>
      <div className={`mt-12 md:mt-0 ${isReversed ? 'md:order-1' : ''}`}>
        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-gray-50 rounded-full blur-2xl opacity-50"></div>
          <div className="text-6xl mb-6 relative z-10" aria-hidden="true">{step.checklist.icon}</div>
          <h4 className="text-xl font-bold mb-6 text-gray-900 relative z-10">{step.checklist.title}</h4>
          {step.step === 3 ? (
            <div className="space-y-4 relative z-10">
              {performanceMetrics.map(metric => (
                <div key={metric.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                    <span className={`font-semibold ${metric.textColor}`}>{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div className={`${metric.color} h-2.5 rounded-full transition-all duration-1000`} style={{ width: `${metric.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 relative z-10">
              {step.checklist.items.map(item => (
                <div key={item} className="flex items-center text-gray-700 font-medium"><CheckIcon /><span>{item}</span></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { CheckIcon, ProcessStep };