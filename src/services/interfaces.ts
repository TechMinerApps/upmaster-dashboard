interface Base {
  readonly id: number;
}

export interface Alert extends Base {
  alert_channal?: AlertChannal;
  alert_channal_id: number;
  status: number;
  user?: User;
  user_id: number;
}

export interface AlertChannal extends Base {
  alerts?: Array<Alert>;
  user?: User;
  user_id: number;
  is_enabled: boolean;
  type: number;
  config: string;
}

export interface Endpoint extends Base {
  name: string;
  user?: User;
  user_id: number;
  url: string;
  interval: number;
  is_enabled: boolean;
  is_public: boolean;
  alerts?: Array<Alert>;
}

export interface User extends Base {
  email: string;
  username: string;
  password: string;
  is_admin: boolean;
  endpoints?: Array<Endpoint>;
  alerts?: Array<Alert>;
  alert_channals?: Array<AlertChannal>;
}
