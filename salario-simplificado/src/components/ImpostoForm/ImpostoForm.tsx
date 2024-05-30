// src/components/forms/ImpostoForm.tsx
import React, { useState } from "react";
import { ImpostoRequest } from "../../types/ImpostoRequest";
import { sendFormData } from "../../api/SendForm";
import './ImpostoForm.css';

const ImpostoForm: React.FC = () => {
  const [formData, setFormData] = useState<ImpostoRequest>({
    salary: 0,
    contract: 'clt',
    otherDiscounts: 0,
    year: 2024,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await sendFormData('get/taxes', formData);
      console.log('Form Data Submitted: ', response);
    } catch (error) {
      console.error('Deu ruim aqui oh!', error);
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Salário</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} />

        <label>Tipo de contrato</label>
        <select name="contract" value={formData.contract} onChange={handleChange}>
          <option value="clt">CLT</option>
          <option value="pj">PJ</option>
        </select>

        <label>Outros Descontos</label>
        <input type="number" name="otherDiscounts" value={formData.otherDiscounts} onChange={handleChange} />

        <label>Ano</label>
        <select name="year" value={formData.year} onChange={handleChange}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default ImpostoForm;
