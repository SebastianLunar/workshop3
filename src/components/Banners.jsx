import woman from "../assets/images/woman.png";
import { BannersDiv, BannersItem } from "../styles/BannerStyles";
export const Banners = () => {
  return (
    <>
      <BannersDiv>
        <BannersItem>
          <div>
            <div>
              <h2>New purchases</h2>
              <p>Shop more with the new product finder</p>
            </div>
            <img src={woman} />
          </div>
        </BannersItem>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={woman} />
          </div>
        </BannersItem>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={woman} />
          </div>
        </BannersItem>
        <BannersItem>
          <div>
            <div>
              <h2>Warm up</h2>
              <p>Before training, be sure to warm up, give it 5 - 10 minutes</p>
            </div>
            <img src={woman} />
          </div>
        </BannersItem>
      </BannersDiv>
    </>
  );
};
