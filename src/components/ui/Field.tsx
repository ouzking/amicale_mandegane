import type { ChangeEvent } from 'react';
import { useT } from '../../i18n/context';

interface FieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  options?: { value: string; label: string }[];
}

/** Champ de formulaire à libellé flottant. */
const Field = ({ name, label, value, onChange, type = 'text', required = true, textarea, options }: FieldProps) => {
  const t = useT();
  const id = `field-${name}`;
  const labelCls =
    'pointer-events-none absolute left-0 top-6 origin-left text-base text-ink-900/50 transition-all duration-300 ease-lux peer-focus:top-0 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-gold-700 peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.25em]';

  if (options) {
    return (
      <div className="relative">
        <label htmlFor={id} className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-ink-900/50">
          {label}
          {required && ' *'}
        </label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="field-lux cursor-pointer appearance-none pt-3"
        >
          <option value="">{t({ fr: 'Sélectionnez', en: 'Select', wo: 'Tànnal' })}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          placeholder={label}
          className="field-lux peer resize-none"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={label}
          className="field-lux peer"
        />
      )}
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && ' *'}
      </label>
    </div>
  );
};

export default Field;
