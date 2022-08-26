export const baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.56879500.ir/habib_app/index.php';
export const Url = 'https://www.56879500.ir';
export const imageUrl = `${Url}/images`;

export const apiRoutes = {
  AUTH1: 'do_login',
  AUTH2: 'forget_password',
  AUTH3:"register_new_user",
  AUTH4:"verify_code",

  //api
  BADGE: 'get_badge_counters',
  VERSION: 'get_app_version',
  SALAVAT_VISIBILITY: 'check_user_has_salavat',
  AU1: 'vew_sabtenam_list_summary',
  AU2: 'vew_sabtenam_list_selected',
  GU1: 'view_zemanat_list_summary',
  GU2: 'view_zemanat_list_selected',
  GU3: 'view_zamen_list_summary',
  GU4: 'view_zamen_list_selected',
  GU5:"check_user_stat",
  GU6:"prepare_sabt_zemanat",
  GU7:"save_zemanat_data",
  GU8:"check_zamen_code_meli_image",
  CH1: 'view_get_check_list_summary',
  CH2: 'view_get_check_list_selected',
  CH3: 'view_pay_check_list_summary',
  CH4: 'view_pay_check_list_selected',
  CH5: 'view_check',
  INS1: 'view_qest_pardakht_nashodeh_list_summary',
  INS2: 'view_qest_pardakht_nashodeh_list_selected',
  INS3: 'vew_qest_pardakht_shodeh_list_summary',
  INS4: 'vew_qest_pardakht_shodeh_list_selected',
  INS5: 'prepare_select_vam_dropdown',//قسط های هر وام
  INS6: 'view_selected_vam_ghest_list_summary',//قسط های هر وام
  INS7: 'view_selected_vam_ghest_list_selected',//قسط های هر وام
  JA1:"view_jari_accounts_list_summary",
  JA2:"view_jari_accounts_list_selected",
  JA3:"prepare_select_cardex_jari_dropdown",//cardex
  JA4:"view_jari_accounts_cardex_summary",//cardex
  JA5:"view_jari_accounts_cardex_selected",//cardex
  BI1:"view_transactions_list_summary",
  BI2:"view_transactions_list_selected",
  HI1:"view_history_summary",
  HI2:"view_history_selected",
  EJ1:"view_ejare_nameh_list_summary",
  EJ2:"view_ejare_nameh_list_selected",
  SC1:"view_scores_list_summary",
  SC2:"view_scores_list_selected",
  MES1:"send_message",
  MES2:"view_sms_list_summary",
  MES3:"view_sms_list_selected",
  MES4:"prepare_select_sms_conditions",
  CONT1:'get_content',
  SAL1:"prepare_select_salavat_dropdown",
  SAL2:"view_salavat_list_summary",
  SAL3:"view_salavat_list_selected",
  SAL4:"save_salavat_daily_count_person",
  VID1:"show_clip",
  PRO1:'prepare_completion_information',
  PRO2:'save_completion_information',
  PRO3:"check_by_code_meli",
  IMG1:"get_image",
  REG1:'prepare_sabtnam_vam',
  REG2:"save_sabtnam_vam_info",
  REG3:"save_sabtnam_vam_melk",
  REG4:"get_image_melk",
  REG5:"save_sabtnam_vam_job",
  REG6:"save_sabtnam_vam_vam",
  REG7:"vew_sabtenam_situation",
  REG8:"reject_sabtenam",
  PASS1:"change_password",

};
