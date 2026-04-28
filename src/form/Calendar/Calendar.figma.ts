// url=https://www.figma.com/design/UNsSJCvXTCFNkEJgNEeAfS/Unify-DS-MK_2.0-CORE?node-id=8446-6179&m=dev
import figma from 'figma';

const instance = figma.selectedInstance;

const isRange = instance.getEnum('Type', { Range: true });

export default {
  example: isRange
    ? figma.code`<CalendarRange headerDateFormat="MMMM yyyy" direction="past" preset={UNIFY_PRESETS} showDayOfWeek showToday />`
    : figma.code`<Calendar headerDateFormat="MMMM yyyy" showDayOfWeek showToday />`,
  imports: [
    isRange
      ? 'import { CalendarRange } from "form/Calendar"\nimport { UNIFY_PRESETS } from "./CalendarPresets"'
      : 'import { Calendar } from "form/Calendar"'
  ],
  id: 'calendar'
};
