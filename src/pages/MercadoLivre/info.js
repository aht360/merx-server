import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {InfoText} from './styles.js'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid #B0935D`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        indicatorColor="primary"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Info-box"
        className={classes.tabs}
        centered= "true"
      >
        <Tab label="Consumidor Livre & Consumidor especial" {...a11yProps(0)} />
        <Tab label="Comercializadores" {...a11yProps(1)} />
        <Tab label="Autoprodutores & Produtores independentes" {...a11yProps(2)} />

      </Tabs>
      <TabPanel value={value} index={0}>
        <InfoText>
            &nbsp;&nbsp;&nbsp;&nbsp;No Ambiente de Contratação Livre (ACL), consumidores que possuem demanda contratada a partir de 500kW  ( isoladamente ou como um grupo econômico ) tem a possibilidade de disfrutar dos benefícios desse ambiente. 
            Tais consumidores podem escolher livremente seu vendedor de energia, além de possuírem outras vantagens como as tarifas de distribuição e transmissão de energia (TUSD E TUST) que no Ambiente Livre podem ser reduzidas ou eliminadas. Além disso, no ACL não há variação de bandeiras tarifárias, o que impulsiona com uma significativa redução nos custos com energia elétrica.
        </InfoText>

      </TabPanel>
      <TabPanel value={value} index={1}>
        <InfoText>
            &nbsp;&nbsp;&nbsp;&nbsp;Os comercializadores de energia são agentes do ambiente livre que compram e vendem energia por meio de contratos bilaterais no ambiente livre. Podendo revender esta energia aos consumidores livres ou a outros comercializadores.  Fazem parte da categoria de comercializadores os importadores, exportadores e comercializadores de energia elétrica, além dos consumidores livres e dos consumidores especiais. 
            As comercializadoras de energia tem entre suas funções solucionar antigos problemas da contratação de energia elétrica, provendo mais eficiência nas transações entre vendedores e compradores.
        </InfoText>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InfoText>
          &nbsp;&nbsp;&nbsp; Temos uma área dedicada aos autoprodutores e produtores independentes.
        </InfoText>
      </TabPanel>
    </div>
  );
}