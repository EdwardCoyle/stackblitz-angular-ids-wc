import { TestBed } from '@angular/core/testing';
import { FullsizeComponent } from './fullsize.component';
describe('FullsizeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FullsizeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(FullsizeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=fullsize.component.spec.js.map