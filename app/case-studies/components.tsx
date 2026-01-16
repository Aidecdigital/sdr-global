import { CaseStudy } from './types';

const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <div className="mb-20 last:mb-0">
    <div className="bg-gray-50 rounded-lg p-8 md:p-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center mb-6">
            <div className={`w-16 h-16 ${study.initialsBg} rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4`}>
              {study.initials}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
              <p className={`${study.subtitleColor} font-semibold`}>{study.subtitle}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Background</h4>
              <p className="text-gray-600">{study.clientBackground}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-red-600 mb-2">The Problem</h4>
              <p className="text-gray-600">{study.problem}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">SDR Global Solution</h4>
              <p className="text-gray-600">{study.solution}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h4 className="text-xl font-bold text-center mb-6">Results Achieved</h4>

          <div className="grid grid-cols-2 gap-6 mb-6">
            {study.results.map((result, i) => (
              <div key={i} className="text-center">
                <div className={`text-3xl font-bold ${result.color} mb-2`}>{result.value}</div>
                <div className="text-sm text-gray-600">{result.label}</div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6">
            <blockquote className="text-gray-700 italic mb-4">{study.quote}</blockquote>
            <div className="text-sm text-gray-600">{study.quoteAuthor}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { CaseStudyCard };