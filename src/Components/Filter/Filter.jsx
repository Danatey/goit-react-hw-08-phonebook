import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import Input from '../Input';

import './Filter.scss'

const generateID = nanoid();

const Filter = ({ filter, onChange }) => (
  <Input
    value={filter}
    onChange={onChange}
    type="text"
    id={generateID}
    name="Find contacts by name"
    classLabel="filter-label"
    classInput="filter-input"
  />
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Filter;
