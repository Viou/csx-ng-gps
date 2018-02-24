export class LocoGpsData {
  constructor(
    public device_i,
    public latitude_m,
    public loco_i,
    public loco_speed_m,
    public longitude_m,
    public report_est_d,
    public signal_quality_c,
    public signal_strength_m,
    public train_i,
    public trans_subdiv_c) {}
}
