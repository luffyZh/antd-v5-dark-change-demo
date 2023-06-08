import { proxy } from 'valtio';
import { theme } from 'antd';

const state = proxy({
  algorithm: theme.defaultAlgorithm,
  toggleTheme: (checked) => {
    state.algorithm = !checked ? theme.darkAlgorithm : theme.defaultAlgorithm;
  }
});

export default state;